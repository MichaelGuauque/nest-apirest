import { Blog } from 'src/blog/blog';
import { Category } from 'src/category/category';
import { Column, ManyToOne, PrimaryGeneratedColumn, Entity } from 'typeorm';

@Entity()
export class Blogdetail {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @ManyToOne(() => Blog, (blog) => blog.blodDetail)
  blog: Blog;

  @ManyToOne(() => Category, (category) => category.blodDetail)
  category: Category;

  @Column()
  createdDate: Date;
}
