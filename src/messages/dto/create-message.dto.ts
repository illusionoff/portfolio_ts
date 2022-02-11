// import { ApiProperty } from '@nestjs/swagger';

export class CreateMessageDto {
  // @ApiProperty({ example: 'user@mail.ru', description: 'Почтовый адрес' })
  readonly name: string;
  // @ApiProperty({ example: '123456789', description: 'пароль' })
  readonly message: string;
}
