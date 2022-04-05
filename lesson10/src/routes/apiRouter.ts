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
// @ts-ignore
router.use('*', (err, req, res, next) => {
    console.log('___________________________');
    console.log(err);
    console.log('___________________________');
    res.status(err.status || 500)
        .json({
            message: err.message,
        });
});

export const apiRouter = router;
