import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TenantsModule } from './modules/public/tenants/tenants.module';
import { TenancyModule } from './modules/tenancy/tenancy.module';

import * as ormconfig from './orm.config';
import { NodeModule } from './modules/tenanted/nodes/node.module';
import { VariableModule } from './modules/tenanted/variable/variable.module';
import { TagModule } from './modules/tenanted/tags/tags.module';

@Module({
  imports: [
    // TypeOrmModule.forRoot({
    //   type: 'postgres',
    //   host: 'localhost',
    //   port: 5432,
    //   username: 'postgres',
    //   password: 'avb123',
    //   database: 'nestjs-multi-tenant',
    //   autoLoadEntities: true,
    // }),
    TypeOrmModule.forRoot(ormconfig),
    TenantsModule,
    TenancyModule,
    NodeModule,
    VariableModule,
    TagModule
  ],
})
export class AppModule { }
