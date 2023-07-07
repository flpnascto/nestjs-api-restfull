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

  private async findById(id: string) {
    const user = await this.users.find((user) => user.id === id);
    if (!user) {
      throw new Error('Usuário não existe');
    }
    return user;
  }

  async checkUserEmail(email: string) {
    return this.users.some((user) => user.email === email);
  }

  async update(id: string, userUpdate: Partial<UserEntity>) {
    const user = await this.findById(id);

    Object.entries(userUpdate).forEach(([key, value]) => {
      if (key === 'id') return;
      user[key] = value;
    });

    return user;
  }

  async delete(id: string) {
    const user = await this.findById(id);

    this.users = this.users.filter((user) => user.id !== id);

    return user;
  }
}
