import { Router } from 'express';
import { authController } from '../controllers/authController';
import {
    authMiddleware, userMiddleware, authValidatorMiddlewares, fileMiddleware,
} from '../middlewares';

const router = Router();

router.post('/registration', fileMiddleware.checkUserAvatar, authController.registration);
router.post('/login', authValidatorMiddlewares.login, userMiddleware.checkIsUserExist, authController.login);
router.post('/logout', authMiddleware.checkAccessToken, authController.logout);
router.post('/refresh', authMiddleware.checkRefreshToken, authController.refreshToken);

export const authRouter = router;
