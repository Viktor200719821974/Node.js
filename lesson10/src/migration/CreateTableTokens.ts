import { MigrationInterface, QueryRunner } from 'typeorm';

export class CreateTableTokens1648564188586 implements MigrationInterface {
    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`
            CREATE TABLE IF NOT EXISTS tokens (
                id INT PRIMARY KEY AUTO_INCREMENT,
                refreshToken VARCHAR(250) NOT NULL,
                userId INT NOT NULL,
                FOREIGN KEY (userId) REFERENCES users (id)
        )
        `);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`
        DROP TABLE IF EXISTS tokens
        `);
    }
}
