import { Inject, Injectable } from '@nestjs/common';
import { Connection, Repository } from 'typeorm';
import { CreateVariableDto } from './dto/variable.request';
import { Variable } from './variable.entity';
import { CONNECTION } from '../../tenancy/tenancy.symbols';

@Injectable()
export class VariableService {
    private readonly variableRepository: Repository<Variable>;

    constructor(
        @Inject(CONNECTION) connection: Connection,
    ) {
        this.variableRepository = connection.getRepository(Variable);
    }

    create(createVariableDto: CreateVariableDto): Promise<Variable> {
        const variable = new Variable();
        variable.name = createVariableDto.name;
        variable.unit = createVariableDto.unit;
        variable.node_id = createVariableDto.nodeId;
        return this.variableRepository.save(variable);
    }

    async findAll(): Promise<Variable[]> {
        return this.variableRepository.find();
    }
}