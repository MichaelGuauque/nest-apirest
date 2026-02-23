import { User } from 'src/user/user';
import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Experience {
  @PrimaryGeneratedColumn('uuid')
  id: string;
  @Column()
  description: string;
  @Column()
  date: Date;
  @ManyToOne(() => User, (user) => user.experiences)
  user: User;
}
