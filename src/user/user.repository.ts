import { Injectable } from '@nestjs/common';

@Injectable()
export default class UserRepository {
  private users = [];
  async save(user: any) {
    this.users.push(user);
  }

  async findAll() {
    return this.users;
  }
}
