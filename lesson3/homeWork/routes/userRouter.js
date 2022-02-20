const {Router} = require('express');
const userController = require('../controllers/userController');

const userRouter = Router();
userRouter.get('/', userController.renderUsers);
userRouter.get('/:id', userController.renderUsersId);
module.exports= userRouter;