import { NextFunction, Response } from 'express';

import { tokenService, usersService } from '../services';
import { IRequestExtended } from '../interfaces';
import { tokenRepository } from '../repositories/token/tokenRepository';
import { constants } from '../constants';
import { ErrorHandler } from '../error/errorHandler';

class AuthMiddleware {
    public async checkAccessToken(req: IRequestExtended, res: Response, next: NextFunction) {
        try {
            const accessToken = req.get(constants.AUTHORIZATION);

            if (!accessToken) {
                throw new ErrorHandler('No token', 404);
            }

            const { userEmail } = tokenService.verifyToken(accessToken);

            const tokenPairFromDB = await tokenRepository.findByParams({ accessToken });

            if (!tokenPairFromDB) {
                next(new ErrorHandler('Token not valid', 400));
            }

            const userFromToken = await usersService.getUserByEmail(userEmail);

            if (!userFromToken) {
                next(new ErrorHandler('Token not valid', 400));
            }

            req.user = userFromToken;

            next();
        } catch (e: any) {
            // res.status(401).json({
            //     status: 400,
            //     message: e.message,
            // });
            next(e);
        }
    }

    public async checkRefreshToken(req: IRequestExtended, res: Response, next: NextFunction) {
        try {
            const refreshToken = req.get(constants.AUTHORIZATION);

            if (!refreshToken) {
                throw new ErrorHandler('Token not valid', 400);
            }

            const { userEmail } = tokenService.verifyToken(refreshToken, 'refresh');

            const tokenPairFromDB = await tokenRepository.findByParams({ refreshToken });

            if (!tokenPairFromDB) {
                next(new ErrorHandler('Token not valid', 400));
            }

            const userFromToken = await usersService.getUserByEmail(userEmail);

            if (!userFromToken) {
                next(new ErrorHandler('Token not valid', 400));
            }

            req.user = userFromToken;

            next();
        } catch (e: any) {
            // res.status(401).json({
            //     status: 401,
            //     message: e.message,
            // });
            next(e);
        }
    }
}

export const authMiddleware = new AuthMiddleware();
