import { Column, PrimaryGeneratedColumn, OneToMany, Entity } from 'typeorm';
import { Blogdetail } from 'src/blogdetail/blogdetail';

@Entity()
export class Category {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  name: string;

  @OneToMany(() => Blogdetail, (blogDetail) => blogDetail.blog)
  blodDetail: Blogdetail[];
}
