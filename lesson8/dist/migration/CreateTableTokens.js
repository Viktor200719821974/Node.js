"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateTableTokens1648564188586 = void 0;
class CreateTableTokens1648564188586 {
    async up(queryRunner) {
        await queryRunner.query(`
            CREATE TABLE IF NOT EXISTS Tokens (
                id INT PRIMARY KEY AUTO_INCREMENT,
                refreshToken VARCHAR(250) NOT NULL,
                userId INT NOT NULL,
                FOREIGN KEY (userId) REFERENCES users (id)
        )
        `);
    }
    async down(queryRunner) {
        await queryRunner.query(`
        DROP TABLE IF EXISTS Tokens
        `);
    }
}
exports.CreateTableTokens1648564188586 = CreateTableTokens1648564188586;
//# sourceMappingURL=CreateTableTokens.js.map