"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.userRepository = void 0;
const typeorm_1 = require("typeorm");
const user_1 = require("../../entity/user");
let UserRepository = class UserRepository extends typeorm_1.Repository {
    async getUsers(users) {
        return (0, typeorm_1.getManager)().getRepository(user_1.User).find();
    }
    async createUser(user) {
        return (0, typeorm_1.getManager)().getRepository(user_1.User).save(user);
    }
    async changeUser(email, password, id) {
        return (0, typeorm_1.getManager)().getRepository(user_1.User).update({ id: Number(id) }, {
            password,
            email,
        });
    }
    async deletedUser(id) {
        return (0, typeorm_1.getManager)().getRepository(user_1.User).delete({ id: Number(id) });
    }
    async getUserByEmail(email) {
        return (0, typeorm_1.getManager)().getRepository(user_1.User)
            .createQueryBuilder('user')
            .where('user.email = :email', { email })
            .andWhere('user.deletedAt IS NULL')
            .getOne();
    }
};
UserRepository = __decorate([
    (0, typeorm_1.EntityRepository)(user_1.User)
], UserRepository);
exports.userRepository = new UserRepository();
//# sourceMappingURL=userRepository.js.map