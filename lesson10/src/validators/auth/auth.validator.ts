import { Joi, Segments } from 'celebrate';
import { commonValidator } from '../common/common.validator';

// const carSubValidator = {
//     model: Joi.string()
// }
export const authValidator = {
    login: {
        [Segments.BODY]: Joi.object({
            email: commonValidator.emailValidator,
            password: Joi.string().required().min(8),
            // cars: Joi.array().items(Joi.object(carSubValidator).min(2).max(90))
        }),
    },
};
