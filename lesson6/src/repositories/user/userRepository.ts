import {
    EntityRepository, getManager, Repository, UpdateResult, DeleteResult,
} from 'typeorm';
import { IUser, User } from '../../entity/user';
import { IUserRepository } from './userRepository.interface';

@EntityRepository(User)
class UserRepository extends Repository<User> implements IUserRepository {
    public async getUsers(users: User[]): Promise<User[]> {
        return getManager().getRepository(User).find();
    }

    public async createUser(user: IUser): Promise<IUser> {
        return getManager().getRepository(User).save(user);
    }

    public async changeUser(email: string, password: string, id: string): Promise<UpdateResult> {
        return getManager().getRepository(User).update({ id: Number(id) }, {
            password,
            email,
        });
    }

    public async deletedUser(id: string): Promise<DeleteResult> {
        return getManager().getRepository(User).delete({ id: Number(id) });
    }

    public async getUserByEmail(email: string): Promise<IUser | undefined> {
        return getManager().getRepository(User)
            .createQueryBuilder('user')
            .where('user.email = :email', { email })
            .andWhere('user.deletedAt IS NULL')
            .getOne();
    }
}

export const userRepository = new UserRepository();
