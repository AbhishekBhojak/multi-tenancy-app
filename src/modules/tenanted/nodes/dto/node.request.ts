import { IsDefined, IsNumber, IsOptional, IsString } from 'class-validator';
import { NodeId } from '../node.entity';

export class CreateNodeDto {

    @IsDefined()
    @IsString()
    name: string;

    @IsOptional()
    @IsNumber()
    parentId: NodeId;
}