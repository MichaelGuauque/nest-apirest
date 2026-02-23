import { Certificationdetail } from 'src/certificationdetail/certificationdetail';
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Certification {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  description: string;

  @Column()
  category: string; //change to enum or class

  @OneToMany(
    () => Certificationdetail,
    (certificarionDetail) => certificarionDetail.certification,
  )
  certificationDetails: Certificationdetail[];
}
