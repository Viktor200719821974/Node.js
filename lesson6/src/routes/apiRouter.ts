import { Router } from 'express';
// import { postsRouter } from './postsRouter';
import { usersRouter } from './usersRouter';
import { authRouter } from './authRouter';
// import { userRouter } from './userRouter';

const router = Router();

router.use('/users', usersRouter);
// router.use('/user', userRouter);
// router.use('/posts', postsRouter);
router.use('/auth', authRouter);

export const apiRouter = router;
