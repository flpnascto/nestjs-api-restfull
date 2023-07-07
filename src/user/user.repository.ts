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

  async update(id: string, userUpdate: Partial<UserEntity>) {
    const selectUser = this.users.find((user) => user.id === id);

    if (!selectUser) {
      throw new Error('Usuário não existe');
    }

    Object.entries(userUpdate).forEach(([key, value]) => {
      if (key === 'id') return;
      selectUser[key] = value;
    });

    return selectUser;
  }
}
