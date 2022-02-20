const {Router} = require('express');
const errorController = require('../controllers/errorController');

const errorRouter = Router();

errorRouter.get('/', errorController.renderError);

module.exports = errorRouter;