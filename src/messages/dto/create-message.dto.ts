import { ApiProperty } from '@nestjs/swagger';

import { IsString, Length, Matches } from 'class-validator';
const regexp = /^([а-яА-ЯёЁa-zA-Z0-9]){3,30}$/; //Недопустимые символы в строке
export class CreateMessageDto {
  @ApiProperty({ example: 'Alex', description: 'You name' })
  @IsString({ message: 'Должно быть строкой' })
  @Length(3, 30, { message: 'Длина имени от 3 до 30 символов' })
  @Matches(regexp, { message: 'Недопустимые символы в строке' })
  readonly name: string;
  @ApiProperty({ example: 'Hello Alex. How are you?', description: 'You message' })
  @IsString({ message: 'Должно быть строкой' })
  @Length(10, 1000, { message: 'Длина сообщения от 10 до 1000 символов' })
  // @Matches(regexp, { message: 'Недопустимые символы в строке' })
  readonly message: string;
}
