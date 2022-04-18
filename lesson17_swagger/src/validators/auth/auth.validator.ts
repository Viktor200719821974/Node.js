import * as Joi from 'joi';
import { commonValidator } from '../common/common.validator';

// const carSubValidator = {
//     model: Joi.string()
// }
export const authValidator = {
    login: Joi.object({
        email: commonValidator.emailValidator.message('Email not valid'),
        password: Joi.string().required().min(8).message('Password not valid'),
        // cars: Joi.array().items(Joi.object(carSubValidator).min(2).max(90))
    }),
};
