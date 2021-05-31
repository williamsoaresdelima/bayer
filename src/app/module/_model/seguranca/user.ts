import { User_type } from './user_type';

export class User {
  id: string;
  nickname: string;
  name: string;
  phone: string;
  email: string;
  active: boolean;
  updatedAt: Date;
  createdAt: Date;
  password: string;

  user_type_id: string;
  user_type: User_type;
}
