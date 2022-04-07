import { MigrationInterface, QueryRunner } from 'typeorm';

export class addAccessToken1648743271310 implements MigrationInterface {
    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query('ALTER TABLE tokens ADD COLUMN accessToken VARCHAR(250) NOT NULL');
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query('ALTER TABLE tokens DROP COLUMN accessToken');
    }
}
