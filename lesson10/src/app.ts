import 'reflect-metadata';
import express from 'express';
import { createConnection } from 'typeorm';
import { apiRouter } from './routes/apiRouter';

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Routes setup
app.use(apiRouter);

const { PORT } = process.env;

app.listen(PORT, async () => {
    console.log(`Server has started!!!!!!! on Port: ${PORT}`);

    try {
        const connection = await createConnection();
        if (connection) {
            console.log('Database connected');
        }
    } catch (err) {
        if (err) console.log(err);
    }
});
