import {
  ValidationOptions,
  ValidatorConstraint,
  ValidatorConstraintInterface,
  registerDecorator,
} from 'class-validator';
import UserRepository from '../user.repository';
import { Injectable } from '@nestjs/common';

@Injectable()
@ValidatorConstraint({ async: true })
export default class UniqueEmailValidator
  implements ValidatorConstraintInterface
{
  constructor(private userRepository: UserRepository) {}

  async validate(email: string): Promise<boolean> {
    const emailExists = await this.userRepository.checkUserEmail(email);
    return !emailExists;
  }
}

export const UniqueEmail = (validationOptions: ValidationOptions) => {
  return (object: object, property: string) => {
    registerDecorator({
      target: object.constructor,
      propertyName: property,
      options: validationOptions,
      constraints: [],
      validator: UniqueEmailValidator,
    });
  };
};
