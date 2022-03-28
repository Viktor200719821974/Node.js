import { getManager, UpdateResult, DeleteResult } from 'typeorm';
import { IUser, User } from '../entity/user';
import { userRepository } from '../repositories/user/userRepository';

class UsersService {
    public async getUsers(users: User[]): Promise<User[]> {
        const getUsers = await getManager().getRepository(User).find();
        return getUsers;
    }

    public async createUser(user: IUser): Promise<IUser> {
        const createdUser = await userRepository.createUser(user);
        return createdUser;
    }

    public async changeUser(email: string, password: string, id: string): Promise<UpdateResult> {
        const getUsers = await userRepository.changeUser(password, email, id);
        return getUsers;
    }

    public async deletedUser(id: string): Promise<DeleteResult> {
        const deletedUser = await userRepository.deletedUser(id);
        return deletedUser;
    }

    public async getUserByEmail(email: string): Promise<IUser | undefined> {
        return userRepository.getUserByEmail(email);
    }
}
export const usersService = new UsersService();
