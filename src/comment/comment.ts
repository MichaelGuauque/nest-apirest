import { Blog } from 'src/blog/blog';
import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
@Entity()
export class Comment {
  @PrimaryGeneratedColumn('uuid')
  id: string;
  @Column()
  comment: string;
  @ManyToOne(() => Blog, (blog) => blog.comments)
  blog: Blog;
  @Column()
  createdDate: Date;
}
