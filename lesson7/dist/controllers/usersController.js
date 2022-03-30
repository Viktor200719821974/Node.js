"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.usersController = void 0;
const usersService_1 = require("../services/usersService");
class UsersController {
    async getUsers(req, res) {
        const users = await usersService_1.usersService.getUsers([]);
        return res.json(users);
    }
    async getUserByEmail(req, res) {
        const { email } = req.params;
        const user = await usersService_1.usersService.getUserByEmail(email);
        return res.json(user);
    }
    async createUsers(req, res) {
        const createdUser = await usersService_1.usersService.createUser(req.body);
        return res.json(createdUser);
    }
    async changeUsers(req, res) {
        const { password, email } = req.body;
        const { id } = req.params;
        const users = await usersService_1.usersService.changeUser(password, email, id);
        return res.json(users);
    }
    async deleteUsers(req, res) {
        const { id } = req.params;
        const users = await usersService_1.usersService.deletedUser(id);
        return res.json(users);
    }
}
exports.usersController = new UsersController();
//# sourceMappingURL=usersController.js.map