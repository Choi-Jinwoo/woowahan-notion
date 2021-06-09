import { Column, Entity, PrimaryColumn } from 'typeorm';
import User, { IUser } from '../core/user.entity';

@Entity('user')
export default class UserSchema implements IUser {
  @PrimaryColumn()
  id!: string;

  @Column({
    unique: true,
  })
  email!: string;

  @Column({
    name: 'profile_image',
  })
  profileImage!: string;

  @Column({
    name: 'google_access_token',
  })
  googleAccessToken!: string;

  static from(userSchema: UserSchema): User {
    const user = new User();
    user.id = userSchema.id;
    user.email = userSchema.email;
    user.profileImage = userSchema.profileImage;

    return user;
  }
}