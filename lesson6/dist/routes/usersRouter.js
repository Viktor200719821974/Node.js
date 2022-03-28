"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.usersRouter = void 0;
const express_1 = require("express");
const usersController_1 = require("../controllers/usersController");
const router = (0, express_1.Router)();
router.get('/', usersController_1.usersController.getUsers);
router.post('/', usersController_1.usersController.createUsers);
router.patch('/:id', usersController_1.usersController.changeUsers);
router.delete('/:id', usersController_1.usersController.deleteUsers);
router.get('/:email', usersController_1.usersController.getUserByEmail);
exports.usersRouter = router;
//# sourceMappingURL=usersRouter.js.map