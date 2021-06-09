import { Service } from 'typedi';
import { UserAdapter } from '../infrastructure/user.adapter';
import User from './user.entity';

@Service()
export default class FindUserService {
  constructor(
    private readonly userAdapter: UserAdapter,
  ) { }

  execute(id: string): Promise<User | undefined> {
    return this.userAdapter.findById(id);
  }
}