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
const config_1 = require("../config/config");
class UsersService {
    async getUsers(users) {
        return (0, typeorm_1.getManager)().getRepository(user_1.User).find();
    }
    async createUser(user) {
        const { password } = user;
        const hashedPassword = await this._hashPassword(password);
        const dataToSave = { ...user, password: hashedPassword };
        return userRepository_1.userRepository.createUser(dataToSave);
    }
    async changeUser(email, password, id) {
        return userRepository_1.userRepository.changeUser(password, email, id);
    }
    async deletedUser(id) {
        return userRepository_1.userRepository.deletedUser(id);
    }
    async getUserByEmail(email) {
        return userRepository_1.userRepository.getUserByEmail(email);
    }
    async compareUserPasswords(password, hash) {
        const isPasswordUnique = await bcrypt_1.default.compare(password, hash);
        if (!isPasswordUnique) {
            throw new Error('User not exists');
        }
    }
    async _hashPassword(password) {
        return bcrypt_1.default.hash(password, Number(config_1.config.USER_SALT_ROUNDS));
    }
}
exports.usersService = new UsersService();
//# sourceMappingURL=usersService.js.map