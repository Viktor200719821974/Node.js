import { NextFunction, Response } from 'express';
import { IRequestExtended } from '../interfaces';
import { userRepository } from '../repositories/user/userRepository';
import { ErrorHandler } from '../error/errorHandler';

class UserMiddleware {
    public async checkIsUserExist(req: IRequestExtended, res: Response, next: NextFunction):
        Promise<void> {
        try {
            const userFromDb = await userRepository.getUserByEmail(req.body.email);

            if (!userFromDb) {
                next(new ErrorHandler('User not found', 404));
                return;
            }
            req.user = userFromDb;
            next();
        } catch (e) {
            // res.status(400).json(e);
            next(e);
        }
    }
}

export const userMiddleware = new UserMiddleware();
