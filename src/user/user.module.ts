import { Module } from '@nestjs/common';
import UserController from './user.controller';
import UserRepository from './user.repository';
import UniqueEmailValidator from './validations/UniqueEmail.validator';

@Module({
  controllers: [UserController],
  providers: [UserRepository, UniqueEmailValidator],
})
export default class UserModule {}
