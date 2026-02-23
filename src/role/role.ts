import { User } from 'src/user/user';
import {
  Column,
  Entity,
  JoinColumn,
  OneToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';

@Entity()
export class Role {
  @PrimaryGeneratedColumn('uuid')
  id: string;
  @Column()
  description: string;

  @OneToOne(() => User, (user) => user.rol)
  @JoinColumn()
  user: User;
}
