import { IsDefined, IsNumber, IsString } from 'class-validator';
import { NodeId } from '../../nodes/node.entity';

export class CreateTagDto {

    @IsDefined()
    @IsString()
    name: string;

    @IsDefined()
    @IsString()
    unit: string;

    @IsDefined()
    @IsNumber()
    nodeId: NodeId;
}