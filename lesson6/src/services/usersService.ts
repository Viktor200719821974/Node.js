import { IUser } from '../entity/user';
import { userRepository } from '../repositories/user/userRepository';

class UsersService {
    public async createUser(user: IUser): Promise<IUser> {
        const createdUser = await userRepository.createUser(user);
        return createdUser;
    }

    public async getUserByEmail(email: string): Promise<IUser | undefined> {
        return userRepository.getUserByEmail(email);
    }
}
export const usersService = new UsersService();
