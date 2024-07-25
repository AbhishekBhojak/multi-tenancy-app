import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Node } from './node.entity';
import { NodeController } from './node.controller';
import { NodeService } from './node.service';

@Module({
    imports: [TypeOrmModule.forFeature([Node])],
    providers: [NodeService],
    controllers: [NodeController],
})
export class NodeModule { }
