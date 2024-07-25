import { MigrationInterface } from "typeorm";
import { PostgresConnectionOptions } from 'typeorm/driver/postgres/PostgresConnectionOptions';
import { PostgresQueryRunner } from 'typeorm/driver/postgres/PostgresQueryRunner';

export class AddNode1721813005684 implements MigrationInterface {

    public async up(queryRunner: PostgresQueryRunner): Promise<void> {
        const { schema } = queryRunner.connection.options as PostgresConnectionOptions;

        await queryRunner.query(
            `CREATE TABLE "${schema}"."node" (
            "id" serial NOT NULL,
            "name" character varying NOT NULL,
            "parent_id" integer,
            "created_at" TIMESTAMP NOT NULL DEFAULT now(),
            "updated_at" TIMESTAMP NOT NULL DEFAULT now(),
            CONSTRAINT "PK_${schema}_2" PRIMARY KEY ("id"),
            CONSTRAINT "FK_${schema}_node_parent" FOREIGN KEY ("parent_id") REFERENCES "${schema}"."node"("id") ON DELETE CASCADE
            )`,
        );
    }

    public async down(queryRunner: PostgresQueryRunner): Promise<void> {
        const { schema } = queryRunner.connection.options as PostgresConnectionOptions;

        await queryRunner.query(`DROP TABLE "${schema}"."node"`);
    }

}
