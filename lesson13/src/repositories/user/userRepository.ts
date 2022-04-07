import {
    EntityRepository, getManager, Repository, UpdateResult, DeleteResult,
} from 'typeorm';
import dayjs from 'dayjs';
import utc from 'dayjs/plugin/utc';
import { IUser, User } from '../../entity/user';
import { IUserRepository } from './userRepository.interface';
import { IPaginationResponse } from '../../interfaces';

dayjs.extend(utc);

@EntityRepository(User)
class UserRepository extends Repository<User> implements IUserRepository {
    getUserPagination(): Promise<IPaginationResponse<IUser>> {
        throw new Error('Method not implemented.');
    }

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

    public async getNewUsers(): Promise<IUser[]> {
        return getManager().getRepository(User)
            .createQueryBuilder('user')
            .where('user.createdAt >= :date', { date: dayjs().utc().startOf('day').format() })
            .getMany();
    }

    public async getUsersPagination(
        searchObject: Partial<IUser> = {},
        limit: number = 25,
        page: number = 1,
    )
        :Promise<IPaginationResponse<IUser>> {
        const skip = limit * (page - 1);
        const [users, itemCount] = await getManager().getRepository(User)
            .findAndCount({ where: searchObject, skip, take: limit });
        return {
            page,
            perPage: limit,
            itemCount,
            data: users,
        };
    }
}

export const userRepository = new UserRepository();
