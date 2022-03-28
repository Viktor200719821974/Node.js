"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.apiRouter = void 0;
const express_1 = require("express");
// import { postsRouter } from './postsRouter';
const usersRouter_1 = require("./usersRouter");
// import { userRouter } from './userRouter';
const router = (0, express_1.Router)();
router.use('/users', usersRouter_1.usersRouter);
// router.use('/user', userRouter);
// router.use('/posts', postsRouter);
exports.apiRouter = router;
//# sourceMappingURL=apiRouter.js.map