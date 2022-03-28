import { Router } from 'express';
// import { postsRouter } from './postsRouter';
import { usersRouter } from './usersRouter';
// import { userRouter } from './userRouter';

const router = Router();

router.use('/users', usersRouter);
// router.use('/user', userRouter);
// router.use('/posts', postsRouter);

export const apiRouter = router;
