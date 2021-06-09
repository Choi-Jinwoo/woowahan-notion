import { IUser } from '../src/user/user.entity';

declare global {
  namespace Express {
    interface User extends IUser { }
  }
}