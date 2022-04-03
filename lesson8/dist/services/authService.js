"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.authService = void 0;
const usersService_1 = require("./usersService");
const tokenService_1 = require("./tokenService");
class AuthService {
    async registration(body) {
        const { email } = body;
        const userFromDb = await usersService_1.usersService.getUserByEmail(email);
        if (userFromDb) {
            throw new Error(`User with email: ${email} already exists`);
        }
        const createdUser = await usersService_1.usersService.createUser(body);
        return this._getTokenData(createdUser);
    }
    async _getTokenData(userData) {
        const { id, email } = userData;
        const tokenPair = await tokenService_1.tokenService.generateTokenPair({ userId: id, userEmail: email });
        await tokenService_1.tokenService.saveToken(id, tokenPair.refreshToken, tokenPair.accessToken);
        return {
            ...tokenPair,
            userId: id,
            userEmail: email,
        };
    }
}
exports.authService = new AuthService();
//# sourceMappingURL=authService.js.map