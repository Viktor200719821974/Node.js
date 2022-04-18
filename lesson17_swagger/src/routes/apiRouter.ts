import { Router } from 'express';
import swaggerUI from 'swagger-ui-express';
import docs from '../docs/swagger.json';
// import { postsRouter } from './postsRouter';
import { usersRouter } from './usersRouter';
import { authRouter } from './authRouter';
import { studentRouter } from './studentRouter';
// import { userRouter } from './userRouter';

const router = Router();

router.use('/docs', swaggerUI.serve, swaggerUI.setup(docs));
router.use('/users', usersRouter);
// router.use('/user', userRouter);
// router.use('/posts', postsRouter);
router.use('/auth', authRouter);
router.use('/students', studentRouter);

export const apiRouter = router;
