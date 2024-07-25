import { BadRequestException, Inject, Injectable } from '@nestjs/common';
import { Connection, Repository } from 'typeorm';
import { CreateNodeDto } from './dto/node.request';
import { Node } from './node.entity';
import { CONNECTION } from '../../tenancy/tenancy.symbols';

@Injectable()
export class NodeService {
    private readonly nodeRepository: Repository<Node>;

    constructor(
        @Inject(CONNECTION) connection: Connection,
    ) {
        this.nodeRepository = connection.getRepository(Node);
    }

    create(createNodeDto: CreateNodeDto): Promise<Node> {
        const node = new Node();
        node.name = createNodeDto.name;
        if (createNodeDto.parentId) {
            node.parent_id = createNodeDto.parentId;
        }
        console.log('node', node);

        return this.nodeRepository.save(node);
    }

    async findAll(): Promise<Node[]> {
        return this.nodeRepository.find();
    }

    async findOne(id: string): Promise<Node> {
        return this.nodeRepository.findOne({ where: { id } });
    }

    async deletes(id: string): Promise<Node> {
        console.log('tenant id: ', id);

        const node: Node = await this.findOne(id);
        if (!node) {
            throw new BadRequestException('Node not found');
        }

        await this.nodeRepository.remove(node);

        return node;
    }
}