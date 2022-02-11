// import { ApiProperty } from '@nestjs/swagger';

import { IsString, Length } from 'class-validator';

export class CreateMessageDto {
  // @ApiProperty({ example: 'user@mail.ru', description: 'Почтовый адрес' })
  @IsString({ message: 'Должно быть строкой' })
  @Length(4, 16, { message: 'Минимальная длина имени 3 символов, а максимальная 30' })
  readonly name: string;
  // @ApiProperty({ example: '123456789', description: 'пароль' })
  @IsString({ message: 'Должно быть строкой' })
  @Length(10, 1000, { message: 'Минимальная длина сообщения 10 символов, а максимальная 1000' })
  readonly message: string;
}