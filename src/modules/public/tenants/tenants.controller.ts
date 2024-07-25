import { Body, Controller, Delete, Get, Param, Post } from '@nestjs/common';
import { CreateTenantDto } from './dto/create-tenant.dto';
import { Tenant } from './tenant.entity';
import { TenantsService } from './tenants.service';

@Controller('tenants')
export class TenantsController {
  constructor(private readonly tenantsService: TenantsService) { }

  @Post()
  create(@Body() createTenantDto: CreateTenantDto): Promise<Tenant> {
    return this.tenantsService.create(createTenantDto);
  }

  @Get()
  findAll(): Promise<Tenant[]> {
    return this.tenantsService.findAll();
  }

  @Get(':id')
  findOne(@Param() params: any): Promise<Tenant> {
    return this.tenantsService.findOne(params.id);
  }

  @Delete(':id')
  delete(@Param('id') id: string): Promise<Tenant> {
    return this.tenantsService.deletes(id);
  }
}
