import { ApiProperty } from '@nestjs/swagger';

import { IsString, Length, Matches } from 'class-validator';
const regexp = /^([а-яА-ЯёЁa-zA-Z0-9]){3,30}$/; //Недопустимые символы в строке
export class CreateMessageDto {
  @ApiProperty({ example: 'Alex', description: 'You name' })
  @IsString({ message: 'Должно быть строкой' })
  @Length(4, 16, { message: 'Минимальная длина имени 3 символов, а максимальная 30' })
  @Matches(regexp, { message: 'Недопустимые символы в строке' })
  readonly name: string;
  @ApiProperty({ example: 'Hello Alex. How are you?', description: 'You message' })
  @IsString({ message: 'Должно быть строкой' })
  @Length(10, 1000, { message: 'Минимальная длина сообщения 10 символов, а максимальная 1000' })
  // @Matches(regexp, { message: 'Недопустимые символы в строке' })
  readonly message: string;
}
