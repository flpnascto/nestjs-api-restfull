import { IsEmail, IsNotEmpty, Matches, MinLength } from 'class-validator';
import { UniqueEmail } from '../validations/UniqueEmail.validator';

export class UserCreateDTO {
  @IsNotEmpty({ message: 'O nome não pode ser vazio' })
  @MinLength(3, { message: 'O nome precisa ter pelo menos 3 caracteres' })
  name: string;

  @IsEmail(undefined, { message: 'O e-mail informado é inválido' })
  @UniqueEmail({ message: 'Este e-mail já está cadastrado' })
  email: string;

  @MinLength(6, { message: 'A senha precisa ter pelo menos 6 caracteres' })
  @Matches(
    /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z])(?=.*[!@#\$%\^&\*]).{6,}$/,
    {
      message:
        'A senha precisa ter pelo menos 1 letra maiúscula, 1 letra minúscula, 1 número e 1 caractere especial',
    },
  )
  password: string;
}
