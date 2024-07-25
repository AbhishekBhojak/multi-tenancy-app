import { Inject, Injectable } from '@nestjs/common';
import { Connection, Repository } from 'typeorm';
import { CreateTagDto } from './dto/tags.request';
import { Tags } from './tags.entity';
import { CONNECTION } from '../../tenancy/tenancy.symbols';

@Injectable()
export class TagService {
    private readonly tagsRepository: Repository<Tags>;

    constructor(
        @Inject(CONNECTION) connection: Connection,
    ) {
        this.tagsRepository = connection.getRepository(Tags);
    }

    create(createTagDto: CreateTagDto): Promise<Tags> {
        const tag = new Tags();
        tag.name = createTagDto.name;
        tag.unit = createTagDto.unit;
        tag.node_id = createTagDto.nodeId;
        return this.tagsRepository.save(tag);
    }

    async findAll(): Promise<Tags[]> {
        return this.tagsRepository.find();
    }
}