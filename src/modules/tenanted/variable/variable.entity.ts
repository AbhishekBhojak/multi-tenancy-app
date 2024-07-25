import { AbstractEntity } from '../../../abstract.entity';
import { Column, Entity, ManyToOne } from 'typeorm';
import { NodeId, Node } from '../nodes/node.entity';

@Entity({ name: 'variable' })
export class Variable extends AbstractEntity {
    @Column()
    name: string;

    @Column()
    unit: string;

    @ManyToOne(() => Node, { nullable: false, onDelete: 'CASCADE' })
    node: Node;

    @Column({ nullable: false })
    node_id: NodeId;
}