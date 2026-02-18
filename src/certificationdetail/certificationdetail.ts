import { Certification } from 'src/certification/certification';
import { User } from 'src/user/user';

export class Certificationdetail {
  id: string;
  date: Date;
  certification: Certification;
  user: User;
}
