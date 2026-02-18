import { Blog } from 'src/blog/blog';
export class Comment {
  id: string;
  comment: string;
  blog: Blog;
  createdDate: Date;
}
