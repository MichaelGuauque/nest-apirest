import { Blogdetail } from 'src/blogdetail/blogdetail';
import { User } from 'src/user/user';
import { Comment } from 'src/comment/comment';
import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  OneToMany,
  ManyToOne,
} from 'typeorm';

@Entity()
export class Blog {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  title: string;

  @Column()
  description: string;

  @ManyToOne(() => User, (user) => user.blogs)
  autor: User;

  @OneToMany(() => Blogdetail, (blogDetail) => blogDetail.blog)
  blodDetail: Blogdetail[];

  @OneToMany(() => Comment, (comment) => comment.blog)
  comments: Comment[];
}
