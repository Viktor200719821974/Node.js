import { Request, Response } from 'express';
import { IUser } from '../entity/user';
import { usersService } from '../services';

class UsersController {
    public async getUsers(req:Request, res:Response): Promise<Response<IUser[]>> {
        const users = await usersService.getUsers([]);
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
        const users = await usersService.changeUser(password, email, id);
        return res.json(users);
    }

    public async deleteUsers(req:Request, res:Response): Promise<Response<void>> {
        const { id } = req.params;
        const users = await usersService.deletedUser(id);
        return res.json(users);
    }
}
export const usersController = new UsersController();
