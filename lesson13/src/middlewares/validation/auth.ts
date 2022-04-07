import { NextFunction, Response } from 'express';

import { IRequestExtended } from '../../interfaces';
import { authValidator } from '../../validators';
import { ErrorHandler } from '../../error/errorHandler';

class AuthValidator {
    login(req: IRequestExtended, res: Response, next: NextFunction) {
        try {
            const { error } = authValidator.login.validate(req.body);
            if (error) {
                next(new ErrorHandler(error.details[0].message, 400));
            }
            next();
        } catch (e) {
            next(e);
        }
    }
}

export const authValidatorMiddlewares = new AuthValidator();
