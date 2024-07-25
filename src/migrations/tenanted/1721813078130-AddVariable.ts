import { MigrationInterface, } from "typeorm";
import { PostgresConnectionOptions } from 'typeorm/driver/postgres/PostgresConnectionOptions';
import { PostgresQueryRunner } from 'typeorm/driver/postgres/PostgresQueryRunner';

export class AddVariable1721813078130 implements MigrationInterface {

    public async up(queryRunner: PostgresQueryRunner): Promise<void> {
        const { schema } = queryRunner.connection.options as PostgresConnectionOptions;

        await queryRunner.query(
            `CREATE TABLE "${schema}"."variable" (
            "id" serial NOT NULL,
            "name" character varying NOT NULL,
            "unit" character varying NOT NULL,
            "node_id" integer,
            "created_at" TIMESTAMP NOT NULL DEFAULT now(),
            "updated_at" TIMESTAMP NOT NULL DEFAULT now(),
            CONSTRAINT "PK_${schema}_3" PRIMARY KEY ("id"),
            CONSTRAINT "FK_${schema}_node_parent" FOREIGN KEY ("node_id") REFERENCES "${schema}"."node"("id") ON DELETE CASCADE
          )`,
        );
    }

    public async down(queryRunner: PostgresQueryRunner): Promise<void> {
        const { schema } = queryRunner.connection.options as PostgresConnectionOptions;

        await queryRunner.query(`DROP TABLE "${schema}"."variable"`);

    }

}
