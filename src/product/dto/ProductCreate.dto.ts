import { Type } from 'class-transformer';
import {
  IsArray,
  IsInt,
  IsNumber,
  IsPositive,
  IsString,
  IsUUID,
  IsUrl,
  Min,
  MinLength,
  ValidateNested,
} from 'class-validator';

export class ProductFeaturesDTO {
  @IsString({ message: 'O nome da característica precisa ser um texto' })
  name: string;

  @IsString({ message: 'A descrição da característica precisa ser um texto' })
  description: string;
}

export class ProductImagesDTO {
  @IsUrl({}, { message: 'A URL da imagem precisa ser válida' })
  url: string;

  @IsString({ message: 'A descrição da imagem precisa ser um texto' })
  description: string;
}

export class ProductCreateDTO {
  @IsString({ message: 'O nome precisa ser um texto' })
  @MinLength(3, { message: 'O nome precisa ter pelo menos 3 caracteres' })
  name: string;

  @IsNumber({ maxDecimalPlaces: 2, allowNaN: false, allowInfinity: false })
  @Min(1, { message: 'O valor precisa ser maior que zero' })
  value: number;

  @IsInt({ message: 'A quantidade precisa ser um número inteiro' })
  @IsPositive({ message: 'A quantidade precisa ser um número positivo' })
  availableQuantity: number;

  @IsString({ message: 'A descrição precisa ser um texto' })
  @MinLength(6, { message: 'A descrição precisa ter pelo menos 6 caracteres' })
  description: string;

  @ValidateNested()
  @IsArray({ message: 'As características precisam ser um array' })
  @Type(() => ProductFeaturesDTO)
  features: ProductFeaturesDTO[];

  @ValidateNested()
  @IsArray({ message: 'As imagens precisam ser um array' })
  @Type(() => ProductImagesDTO)
  images: ProductImagesDTO[];

  @IsString({ message: 'A categoria precisa ser um texto' })
  category: string;

  @IsUUID(undefined, { message: 'O ID do usuário precisa ser um UUID válido' })
  userId: string;
}
