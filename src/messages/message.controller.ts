import { Body, Controller, Get, Post, UseGuards, UsePipes } from '@nestjs/common';
import { ValidationPipe } from 'src/pipes/validation.pipe';
// import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
// import { JwtAuthGuard } from 'src/auth/jwt-auth.guard';
// import { Roles } from 'src/auth/roles-auth.decorator';
// import { RolesGuard } from 'src/auth/roles.guard';
import { CreateMessageDto } from './dto/create-message.dto';
// import { CreateUserDto } from './dto/create-user.dto';
import { MessagesService } from './message.service';
// import { User } from './users.model';
// import { MessageService } from './users.service';

// @ApiTags('Пользователи')
@Controller('messages')
export class MessagesController {
  constructor(private usersService: MessagesService) {}

  // @ApiOperation({ summary: 'Создание пользователя' })
  // @ApiResponse({ status: 200, type: User })
  @UsePipes(ValidationPipe)
  @Post()
  create(@Body() messageDto: CreateMessageDto) {
    return this.usersService.createMessage(messageDto);
  }

  // @ApiOperation({ summary: 'Получить всех пользователей' })
  // @ApiResponse({ status: 200, type: [User] })
  ///// @UseGuards(JwtAuthGuard) // Открываем доступ только для зарегистрированных пользователей
  // @Roles('ADMIN')
  // @UseGuards(RolesGuard)
  @Get()
  getAll() {
    return this.usersService.getAllUsers();
  }
}
