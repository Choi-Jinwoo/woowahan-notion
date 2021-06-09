import { Service } from 'typedi';
import { InjectRepository } from 'typeorm-typedi-extensions';
import User from '../core/user.entity';
import UserRepository from './user.repository';
import UserSchema from './user.schema';

@Service()
export class UserAdapter {
  constructor(
    @InjectRepository(UserSchema)
    private readonly userRepository: UserRepository,
  ) { }

  async findById(id: string): Promise<User | undefined> {
    const userSchema = await this.userRepository.findOne(id);
    if (userSchema === undefined) {
      return undefined;
    }

    return UserSchema.from(userSchema);
  }
}