import { Body, Controller, Get, Post } from '@nestjs/common';
import { Variable } from './variable.entity';
import { VariableService } from './variable.service';
import { CreateVariableDto } from './dto/variable.request';
@Controller('variable')
export class VariableController {
    constructor(private readonly variableService: VariableService) { }

    @Post()
    create(@Body() createVariableDto: CreateVariableDto): Promise<Variable> {
        return this.variableService.create(createVariableDto);
    }

    @Get()
    findAll(): Promise<Variable[]> {
        return this.variableService.findAll();
    }
}