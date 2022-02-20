const {Router} = require('express');
const loginController = require('../controllers/loginController');
const loginMiddleware = require('../middleware/isUserValid');

const loginRouter = Router();

loginRouter.get('/', loginController.renderLoginGet);
loginRouter.post('/', loginMiddleware, loginController.renderLoginPost);

module.exports = loginRouter;