import { Injectable } from '@nestjs/common';
import { UserEntity } from './user.entity';

@Injectable()
export default class UserRepository {
  private users: UserEntity[] = [];
  async save(user: UserEntity) {
    this.users.push(user);
  }

  async findAll() {
    return this.users;
  }

  async checkUserEmail(email: string) {
    return this.users.some((user) => user.email === email);
  }
}
