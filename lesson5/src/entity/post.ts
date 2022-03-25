import { Column, Entity, ManyToOne } from 'typeorm';
import { JoinColumn } from 'typeorm/browser';
import { CommonFields } from './commonFields';
import { User } from './user';

export interface IPost {
    title: string;
    text: string;
    userId: number;
}

@Entity('posts', { database: 'okten' })
export class Post extends CommonFields implements IPost {
    @Column({
        type: 'varchar',
        width: 250,
        nullable: false,
    })
        title: string;

    @Column({
        type: 'varchar',
        width: 250,
        nullable: false,
    })
        text: string;

    @Column({
        type: 'int',
    })
        userId: number;

    @ManyToOne(() => User, (user) => user.posts)
    @JoinColumn({ name: 'userId' })
        user: User;
}
