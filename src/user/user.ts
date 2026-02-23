import { Role } from 'src/role/role';
import { Profile } from 'src/profile/profile';
import {
  Column,
  Entity,
  OneToMany,
  OneToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { Blog } from 'src/blog/blog';
import { Certificationdetail } from 'src/certificationdetail/certificationdetail';
import { Experience } from 'src/experience/experience';

@Entity()
export class User {
  @PrimaryGeneratedColumn('uuid')
  id: string;
  @Column()
  username: string;
  @Column()
  password: string;
  @OneToOne(() => Roel, (role) => role.user)
  rol: Role;
  @OneToOne(() => Profile, (profile) => profile.user)
  profile: Profile;

  @OneToMany(() => Blog, (blog) => blog.autor)
  blogs: Blog[];

  @OneToMany(
    () => Certificationdetail,
    (certificarionDetail) => certificarionDetail.user,
  )
  certificationDetails: Certificationdetail[];

  @OneToMany(() => Experience, (experience) => experience.user)
  experiences: Experience[];
}
