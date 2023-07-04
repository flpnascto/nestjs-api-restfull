import { Body, Controller, Get, Post } from '@nestjs/common';
import UserRepository from './user.repository';

@Controller('/users')
export default class UserController {
  constructor(private userRepository: UserRepository) {}

  @Post()
  async create(@Body() user: any) {
    this.userRepository.save(user);
    return user;
  }

  @Get()
  async findAll() {
    return this.userRepository.findAll();
  }
}
