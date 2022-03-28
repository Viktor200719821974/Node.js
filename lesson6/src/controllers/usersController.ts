import { Request, Response } from 'express';
import { getManager } from 'typeorm';
import { IUser, User } from '../entity/user';
import { usersService } from '../services/usersService';

class UsersController {
    public async getUsers(req:Request, res:Response): Promise<Response<IUser>> {
        const users = await getManager().getRepository(User).find();
        return res.json(users);
    }

    public async getUserByEmail(req:Request, res:Response): Promise<Response<IUser>> {
        const { email } = req.params;
        const user = await usersService.getUserByEmail(email);
        return res.json(user);
    }

    public async createUsers(req:Request, res:Response): Promise<Response<IUser>> {
        const createdUser = await usersService.createUser(req.body);
        return res.json(createdUser);
    }

    public async changeUsers(req:Request, res:Response): Promise<Response<IUser>> {
        const { password, email } = req.body;
        const { id } = req.params;
        const users = await getManager().getRepository(User).update({ id: Number(id) }, {
            password,
            email,
        });
        return res.json(users);
    }

    public async deleteUsers(req:Request, res:Response): Promise<Response<IUser>> {
        const { id } = req.params;
        const users = await getManager().getRepository(User).delete({ id: Number(id) });
        return res.json(users);
    }
}
export const usersController = new UsersController();
