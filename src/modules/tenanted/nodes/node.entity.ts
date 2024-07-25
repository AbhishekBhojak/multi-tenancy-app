import { AbstractEntity } from '../../../abstract.entity';
import { Column, Entity, JoinColumn, ManyToOne, OneToMany } from 'typeorm';

export declare type NodeId = number;
@Entity({ name: 'node' })
export class Node extends AbstractEntity {
    @Column()
    name: string;

    @Column({ nullable: true })
    parent_id: NodeId;

    @ManyToOne(() => Node, (node) => node.children, { onDelete: 'CASCADE' })
    @JoinColumn({ name: 'parent_id' })
    parent: Node;

    @OneToMany(() => Node, (node) => node.parent)
    children: Node[];
}
