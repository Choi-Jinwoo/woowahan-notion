import { EntityRepository, Repository } from 'typeorm';
import UserSchema from './user.schema';

@EntityRepository(UserSchema)
export default class UserRepository extends Repository<UserSchema> {
}