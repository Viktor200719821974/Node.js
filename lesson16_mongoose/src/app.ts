import 'reflect-metadata';
import express from 'express';
import mongoose from 'mongoose';
import http from 'http';
import fileUpload from 'express-fileupload';
import { createConnection } from 'typeorm';
import SocketIO from 'socket.io';
import { apiRouter } from './routes/apiRouter';
import { cronRun } from './cron';
import { socketController } from './controllers/socket.controller';

const app = express();
const server = http.createServer(app);
// @ts-ignore
const io = SocketIO(server, { cors: { origin: '*' } });
io.on('connection', (socket:any) => {
    socket.on('message:create', (data: any) => socketController.messageCreate(io, socket, data));
    socket.on('join_room', (data: any) => {
        socket.join(data.id);
        // ONE TO MANY AVOID SENDER
        // socket.broadcast.to(data.id)
        // .emit('user_join_room',{ message: `User ${socket.id} joined room` });

        // EMIT TO ALL USERS IN ROOM (INCLUDE SENDER)
        io.to(data.id).emit('user_join_room', { message: `User ${socket.id} joined room` });
    });
});

app.use(fileUpload());

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

mongoose.connect('mongodb://localhost:27017/sep2021');

// Routes setup
app.use(apiRouter);

// @ts-ignore
app.use('*', (err, req, res, next) => {
    res.status(err.status || 500)
        .json({
            message: err.message,
        });
});

const { PORT } = process.env;

server.listen(PORT, async () => {
    // eslint-disable-next-line no-console
    console.log(`Server has started!!!!!!! on Port: ${PORT}`);

    try {
        const connection = await createConnection();
        if (connection) {
            // eslint-disable-next-line no-console
            console.log('Database connected');
            cronRun();
        }
    } catch (err) {
        // eslint-disable-next-line no-console
        if (err) console.log(err);
    }
});
