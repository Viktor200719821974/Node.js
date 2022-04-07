import { getManager, UpdateResult, DeleteResult } from 'typeorm';
import bcrypt from 'bcrypt';
import { IUser, User } from '../entity/user';
import { userRepository } from '../repositories/user/userRepository';
import { config } from '../config/config';

class UsersService {
    public async getUsers(users: User[]): Promise<User[]> {
        return getManager().getRepository(User).find();
    }

    public async getUserPagination(filterObject: any, page: number, perPage: number) {
        return userRepository.getUsersPagination(filterObject, perPage, page);
    }

    public async createUser(user: IUser): Promise<IUser> {
        const { password } = user;
        const hashedPassword = await this._hashPassword(password);
        const dataToSave = { ...user, password: hashedPassword };
        return userRepository.createUser(dataToSave);
    }

    public async changeUser(email: string, password: string, id: string): Promise<UpdateResult> {
        return userRepository.changeUser(password, email, id);
    }

    public async deletedUser(id: string): Promise<DeleteResult> {
        return userRepository.deletedUser(id);
    }

    public async getUserByEmail(email: string): Promise<IUser | undefined> {
        return userRepository.getUserByEmail(email);
    }

    public async compareUserPasswords(password: string, hash: string): Promise<void | Error> {
        const isPasswordUnique = await bcrypt.compare(password, hash);
        if (!isPasswordUnique) {
            throw new Error('User not exists');
        }
    }

    private async _hashPassword(password: string): Promise<string> {
        return bcrypt.hash(password, Number(config.USER_SALT_ROUNDS));
    }
}
export const usersService = new UsersService();
