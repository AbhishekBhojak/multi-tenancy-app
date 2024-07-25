import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Variable } from './variable.entity';
import { VariableController } from './variable.controller';
import { VariableService } from './variable.service';

@Module({
    imports: [TypeOrmModule.forFeature([Variable])],
    providers: [VariableService],
    controllers: [VariableController],
})
export class VariableModule { }
