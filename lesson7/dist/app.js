"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
require("reflect-metadata");
const express_1 = __importDefault(require("express"));
const typeorm_1 = require("typeorm");
const apiRouter_1 = require("./routes/apiRouter");
const app = (0, express_1.default)();
app.use(express_1.default.json());
app.use(express_1.default.urlencoded({ extended: true }));
// Routes setup
app.use(apiRouter_1.apiRouter);
// app.get('/users', async (req:Request, res:Response) => {
//     const users = await getManager().getRepository(User).find();
//     res.json(users);
// });
// app.post('/users', async (req:Request, res:Response) => {
//     const createdUser = await getManager().getRepository(User).save(req.body);
//     res.json(createdUser);
// });
// app.patch('/users', async (req:Request, res:Response) => {
//     const { password, email } = req.body;
//     const { id } = req.params;
//     const users = await getManager().getRepository(User).update({ id: Number(id) }, {
//         password,
//         email,
//     });
//     res.json(users);
// });
// app.delete('/users', async (req:Request, res:Response) => {
//     const { id } = req.params;
//     const users = await getManager().getRepository(User).delete({ id: Number(id) });
//     res.json(users);
// });
// app.get('/user', async (req: Request, res: Response) => {
//     const user = await getManager().getRepository(User).findOne({
//         where: {
//             firstName: 'Olena',
//         },
//     });
//     res.json(user);
// });
// app.delete('/users/:id', async (req: Request, res: Response) => {
//     const { id } = req.params;
//     const users = await getManager().getRepository(User).softDelete({ id: Number(id) });
//     res.json(users);
// });
// const users = await getManager().getRepository(User).find({ relations: ['posts'] });
// res.json(users);
// const users = await getManager().getRepository(User)
//     .createQueryBuilder('user')
//     .where('user.firstName = "Taras"')
//     .getOne();
//
// console.log(users);
// res.json(users);
//     const users = await getManager().getRepository(User)
//         .createQueryBuilder('user')
//         .leftJoin('Posts', 'posts', 'posts.userId = user.id')
//         .where('posts.text = "asdas"')
//         .getMany();
//     res.json(users);
// });
//
const { PORT } = process.env;
app.listen(PORT, async () => {
    console.log(`Server has started!!!!!!! on Port: ${PORT}`);
    try {
        const connection = await (0, typeorm_1.createConnection)();
        if (connection) {
            console.log('Database connected');
        }
    }
    catch (err) {
        if (err)
            console.log(err);
    }
});
//# sourceMappingURL=app.js.map