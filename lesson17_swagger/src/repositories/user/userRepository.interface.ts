import { UpdateResult, DeleteResult } from 'typeorm';
import { IUser, User } from '../../entity/user';
import { IPaginationResponse } from '../../interfaces';

export interface IUserRepository{
    getUsers(users: User[]): Promise<User[]>;
    createUser(user: IUser): Promise<IUser>;
    changeUser(email: string, password: string, id: string): Promise<UpdateResult>;
    deletedUser(id: string): Promise<DeleteResult>;
    getUserByEmail(email: string): Promise<IUser | undefined>;
    getNewUsers(): Promise<IUser[]>;
    getUserPagination(): Promise<IPaginationResponse<IUser>>;
}
