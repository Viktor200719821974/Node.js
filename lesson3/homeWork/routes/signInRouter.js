const {Router} = require('express');
const signInController = require('../controllers/signInController');
const signInMiddleware = require('../middleware/isSignInValid');

const signInRouter = Router();

signInRouter.get('/', signInController.renderSignInGet);
signInRouter.post('/', signInMiddleware, signInController.renderSignInPost);

module.exports = signInRouter;