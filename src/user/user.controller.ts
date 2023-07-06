import { Body, Controller, Get, Post } from '@nestjs/common';
import UserRepository from './user.repository';
import { UserCreateDTO } from './dto/UserCreate.dto';
import { UserEntity } from './user.entity';
import { v4 as uuid } from 'uuid';
import UserListDTO from './dto/UserList.dto';

@Controller('/users')
export default class UserController {
  constructor(private userRepository: UserRepository) {}

  @Post()
  async create(@Body() user: UserCreateDTO) {
    const userEntity = new UserEntity();
    userEntity.name = user.name;
    userEntity.email = user.email;
    userEntity.password = user.password;
    userEntity.id = uuid();

    this.userRepository.save(userEntity);
    return {
      user: new UserListDTO(userEntity.id, userEntity.name),
      message: 'User created successfully',
    };
  }

  @Get()
  async findAll() {
    const users = await this.userRepository.findAll();
    const userList = users.map((user) => new UserListDTO(user.id, user.name));
    return userList;
  }
}
