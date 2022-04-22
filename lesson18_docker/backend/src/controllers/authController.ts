import { NextFunction, Request, Response } from 'express';
import { UploadedFile } from 'express-fileupload';
import { IRequestExtended } from '../interfaces';
import { EmailActionEnum } from '../constants';
import {
    authService, emailService, s3Service, tokenService, usersService,
} from '../services';
import { IUser } from '../entity/user';
import { tokenRepository } from '../repositories/token/tokenRepository';
import { ErrorHandler } from '../error/errorHandler';

class AuthController {
    public async registration(req: Request, res: Response, next: NextFunction): Promise<void> {
        try {
            const { email } = req.body;
            const avatar = req.files?.avatar as UploadedFile;
            const userFromDb = await usersService.getUserByEmail(email);
            if (userFromDb) {
                next(new ErrorHandler(`User with email: ${email} already exists`));
            }
            const createdUser = await usersService.createUser(req.body);
            // UPLOAD PHOTO
            if (avatar) {
                await s3Service.uploadFile(avatar, 'user', createdUser.id);
            }

            // UPDATE USER
            const tokenData = await authService.registration(createdUser);
            res.json(tokenData);
        } catch (e) {
            next(e);
        }
    }

    async logout(req: IRequestExtended, res: Response): Promise<Response<string>> {
        const { id } = req.user as IUser;

        await tokenService.deleteUserTokenPair(id);
        return res.json('Ok');
    }

    async login(req: IRequestExtended, res: Response, next: NextFunction) {
        try {
            const { id, email, password: hashPassword } = req.user as IUser;
            const { password } = req.body;
            await emailService.sendMail(email, EmailActionEnum.WELCOME, { userName: 'Nastya' });
            await usersService.compareUserPasswords(password, hashPassword);
            const { refreshToken, accessToken } = tokenService.generateTokenPair(
                { userId: id, userEmail: email },
            );

            await tokenRepository.createToken({ refreshToken, accessToken, userId: id });
            res.json({
                refreshToken,
                accessToken,
                user: req.user,
            });
        } catch (e) {
            // res.status(400).json(e);
            next(e);
        }
    }

    async refreshToken(req: IRequestExtended, res: Response, next: NextFunction) {
        try {
            const { id, email } = req.user as IUser;
            const refreshTokenToDelete = req.get('Authorization');

            await tokenService.deleteTokenPairByParams({ refreshToken: refreshTokenToDelete });

            const { accessToken, refreshToken } = await tokenService.generateTokenPair(
                { userId: id, userEmail: email },
            );

            await tokenRepository.createToken({ refreshToken, accessToken, userId: id });

            res.json({
                refreshToken,
                accessToken,
                user: req.user,
            });
        } catch (e) {
            // res.status(400).json(e);
            next(e);
        }
    }
}

export const authController = new AuthController();
