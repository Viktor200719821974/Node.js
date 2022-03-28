"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.usersController = void 0;
const typeorm_1 = require("typeorm");
const user_1 = require("../entity/user");
const usersService_1 = require("../services/usersService");
class UsersController {
    async getUsers(req, res) {
        const users = await (0, typeorm_1.getManager)().getRepository(user_1.User).find();
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
        const users = await (0, typeorm_1.getManager)().getRepository(user_1.User).update({ id: Number(id) }, {
            password,
            email,
        });
        return res.json(users);
    }
    async deleteUsers(req, res) {
        const { id } = req.params;
        const users = await (0, typeorm_1.getManager)().getRepository(user_1.User).delete({ id: Number(id) });
        return res.json(users);
    }
}
exports.usersController = new UsersController();
//# sourceMappingURL=usersController.js.map