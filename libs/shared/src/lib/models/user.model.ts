import { IUser } from '../interfaces/user.interface';

export class UserModel {
  public readonly id: number;
  public readonly username: string;
  public readonly verified: boolean;
  public readonly roles: string[];

  constructor(user: IUser) {
    this.id = user.id;
    this.username = user.username;
    this.verified = user.verified;
    this.roles = user.roles;
  }
}
