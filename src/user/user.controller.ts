import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import UserRepository from './user.repository';
import { UserCreateDTO } from './dto/UserCreate.dto';
import { UserEntity } from './user.entity';
import { v4 as uuid } from 'uuid';
import UserListDTO from './dto/UserList.dto';
import { UserUpdateDTO } from './dto/UserUpdate.dto';

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

  @Put('/:id')
  async update(@Body() user: UserUpdateDTO, @Param('id') id: string) {
    const updateUser = await this.userRepository.update(id, user);
    return {
      user: updateUser,
      message: 'User updated successfully',
    };
  }

  @Delete('/:id')
  async remove(@Param('id') id: string) {
    const user = await this.userRepository.delete(id);
    return {
      user,
      message: 'User deleted successfully',
    };
  }
}
