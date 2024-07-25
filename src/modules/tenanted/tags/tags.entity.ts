import { AbstractEntity } from '../../../abstract.entity';
import { Column, Entity, ManyToOne } from 'typeorm';
import { NodeId, Node } from '../nodes/node.entity';

@Entity({ name: 'tags' })
export class Tags extends AbstractEntity {
    @Column()
    name: string;

    @Column()
    unit: string;

    @ManyToOne(() => Node, { nullable: false })
    node: Node;

    @Column({ nullable: false })
    node_id: NodeId;
}