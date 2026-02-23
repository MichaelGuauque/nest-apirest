import { Certification } from 'src/certification/certification';
import { User } from 'src/user/user';
import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Certificationdetail {
  @PrimaryGeneratedColumn('uuid')
  id: string;
  @Column()
  date: Date;
  @ManyToOne(
    () => Certification,
    (certificarion) => certificarion.certificationDetails,
  )
  certification: Certification;
  @ManyToOne(() => User, (user) => user.certificationDetails)
  user: User;
}
