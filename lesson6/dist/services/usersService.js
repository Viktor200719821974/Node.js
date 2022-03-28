"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.usersService = void 0;
const userRepository_1 = require("../repositories/user/userRepository");
class UsersService {
    async createUser(user) {
        const createdUser = await userRepository_1.userRepository.createUser(user);
        return createdUser;
    }
    async getUserByEmail(email) {
        return userRepository_1.userRepository.getUserByEmail(email);
    }
}
exports.usersService = new UsersService();
//# sourceMappingURL=usersService.js.map