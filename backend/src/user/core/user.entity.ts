export default class User implements IUser {
  id!: string;
  email!: string;
  profileImage!: string;
  googleAccessToken!: string;
}

export interface IUser {
  id: string;
  email: string;
  profileImage: string;
  googleAccessToken: string;
}