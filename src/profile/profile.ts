import {
  Column,
  Entity,
  JoinColumn,
  OneToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { User } from '../user/user';

@Entity()
export class Profile {
  @PrimaryGeneratedColumn('uuid')
  id: string;
  @Column()
  name: string;
  @Column()
  lastname: string;
  @Column()
  nickname: string;
  @Column()
  birthdate: Date;

  @OneToOne(() => User, (user) => user.profile)
  @JoinColumn()
  user: User;
}
