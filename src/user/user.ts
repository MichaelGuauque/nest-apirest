import { Role } from 'src/role/role';
import { Profile } from 'src/profile/profile';

export class User {
  id: string;
  username: string;
  password: string;
  rol: Role;
  profile: Profile;
}
