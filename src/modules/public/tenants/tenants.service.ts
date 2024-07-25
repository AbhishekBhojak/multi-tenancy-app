import { BadRequestException, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { getTenantConnection } from '../../tenancy/tenancy.utils';
import { getManager, Repository } from 'typeorm';
import { CreateTenantDto } from './dto/create-tenant.dto';
import { Tenant } from './tenant.entity';
import { connected } from 'process';

@Injectable()
export class TenantsService {
  constructor(
    @InjectRepository(Tenant)
    private readonly tenantsRepository: Repository<Tenant>,
  ) { }

  async create(createTenantDto: CreateTenantDto): Promise<Tenant> {
    let tenant = new Tenant();
    tenant.name = createTenantDto.name;

    tenant = await this.tenantsRepository.save(tenant);

    const schemaName = `tenant_${tenant.id}`;
    await getManager().query(`CREATE SCHEMA IF NOT EXISTS "${schemaName}"`);

    const connection = await getTenantConnection(`${tenant.id}`);
    await connection.runMigrations()
    await connection.close();

    return tenant;
  }

  async findAll(): Promise<Tenant[]> {
    return this.tenantsRepository.find();
  }

  async findOne(id: string): Promise<Tenant> {
    return this.tenantsRepository.findOne({ where: { id } })
  }

  async deletes(id: string): Promise<Tenant> {
    console.log('tenant id: ', id);

    const tenant: Tenant = await this.findOne(id);
    if (!tenant) {
      throw new BadRequestException('Tenant not found');
    }

    const schemaName = `tenant_${tenant.id}`;
    console.log('schema name: ', schemaName);

    await this.tenantsRepository.remove(tenant);

    await getManager().query(`DROP SCHEMA IF EXISTS "${schemaName}" CASCADE`);
    const connection = await getTenantConnection(`${tenant.id}`);
    // await connection.runMigrations()
    await connection.close();
    return tenant;
  }
}
