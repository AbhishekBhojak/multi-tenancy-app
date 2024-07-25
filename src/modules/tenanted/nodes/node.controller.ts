import { Body, Controller, Delete, Get, Param, Post } from '@nestjs/common';
import { Node } from './node.entity';
import { NodeService } from './node.service';
import { CreateNodeDto } from './dto/node.request';
@Controller('node')
export class NodeController {
    constructor(private readonly nodeService: NodeService) { }

    @Post()
    create(@Body() createNodeDto: CreateNodeDto): Promise<Node> {
        return this.nodeService.create(createNodeDto);
    }

    @Get()
    findAll(): Promise<Node[]> {
        return this.nodeService.findAll();
    }

    @Delete(':id')
    delete(@Param('id') id: string): Promise<Node> {
        return this.nodeService.deletes(id);
    }
}