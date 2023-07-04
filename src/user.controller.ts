import { Body, Controller, Post } from '@nestjs/common';

@Controller('/users')
export default class UserController {
  @Post()
  async create(@Body() user: any) {
    return user;
  }
}
