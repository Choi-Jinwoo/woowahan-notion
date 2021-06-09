import { IUser } from '../src/user/core/user.entity';

declare global {
  namespace Express {
    interface User extends IUser { }
  }
}