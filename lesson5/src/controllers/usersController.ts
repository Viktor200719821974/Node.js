// // eslint-disable-next-line import/no-import-module-exports
// import { Request, Response } from 'express';
// // eslint-disable-next-line import/no-import-module-exports
// import { getManager } from 'typeorm';
// // eslint-disable-next-line import/no-import-module-exports
// import { User } from '../entity/user';
//
// class UsersController {
//     renderGetUsers = async (req:Request, res:Response) => {
//         const users = await getManager().getRepository(User).find();
//         res.json(users);
//     };
//
//     renderPostUsers = async (req:Request, res:Response) => {
//         const createdUser = await getManager().getRepository(User).save(req.body);
//         res.json(createdUser);
//     };
//
//     renderPatchUsers = async (req:Request, res:Response) => {
//         const { password, email } = req.body;
//         const { id } = req.params;
//         const users = await getManager().getRepository(User).update({ id: Number(id) }, {
//             password,
//             email,
//         });
//         res.json(users);
//     };
//
//     renderDeleteUsers = async (req:Request, res:Response) => {
//         const { id } = req.params;
//         const users = await getManager().getRepository(User).delete({ id: Number(id) });
//         res.json(users);
//     };
// }
// module.exports = new UsersController();
