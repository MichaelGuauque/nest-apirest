import { Blog } from 'src/blog/blog';
import { Category } from 'src/category/category';

export class Blogdetail {
  id: string;
  blog: Blog;
  category: Category;
  createdDate: Date;
}
