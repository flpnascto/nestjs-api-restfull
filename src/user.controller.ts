import { Body, Controller, Post } from '@nestjs/common';
import UserRepository from './user.repository';

@Controller('/users')
export default class UserController {
  constructor(private userRepository: UserRepository) {}

  @Post()
  async create(@Body() user: any) {
    this.userRepository.save(user);
    return user;
  }
}
