import { MigrationInterface, QueryRunner } from "typeorm";

export class AddPhoneToUsers1733691316312 implements MigrationInterface {
    name = 'AddPhoneToUsers1733691316312'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "user" ADD "phone" character varying NOT NULL`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "user" DROP COLUMN "phone"`);
    }

}
