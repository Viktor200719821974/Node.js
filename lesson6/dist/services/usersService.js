"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.usersService = void 0;
const typeorm_1 = require("typeorm");
const bcrypt_1 = __importDefault(require("bcrypt"));
const user_1 = require("../entity/user");
const userRepository_1 = require("../repositories/user/userRepository");
class UsersService {
    async getUsers(users) {
        const getUsers = await (0, typeorm_1.getManager)().getRepository(user_1.User).find();
        return getUsers;
    }
    async createUser(user) {
        const { password } = user;
        const hashedPassword = await this._hashPassword(password);
        const dataToSave = { ...user, password: hashedPassword };
        const createdUser = await userRepository_1.userRepository.createUser(dataToSave);
        return createdUser;
    }
    async changeUser(email, password, id) {
        const getUsers = await userRepository_1.userRepository.changeUser(password, email, id);
        return getUsers;
    }
    async deletedUser(id) {
        const deletedUser = await userRepository_1.userRepository.deletedUser(id);
        return deletedUser;
    }
    async getUserByEmail(email) {
        return userRepository_1.userRepository.getUserByEmail(email);
    }
    async _hashPassword(password) {
        return bcrypt_1.default.hash(password, 10);
    }
}
exports.usersService = new UsersService();
//# sourceMappingURL=usersService.js.map