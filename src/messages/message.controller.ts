import { Body, Controller, Get, Param, Post, UseGuards, UsePipes } from '@nestjs/common';
import { ValidationPipe } from 'src/pipes/validation.pipe';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
// import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
// import { JwtAuthGuard } from 'src/auth/jwt-auth.guard';
// import { Roles } from 'src/auth/roles-auth.decorator';
// import { RolesGuard } from 'src/auth/roles.guard';
import { CreateMessageDto } from './dto/create-message.dto';
import { Message } from './message.model';
// import { CreateUserDto } from './dto/create-user.dto';
import { MessagesService } from './message.service';
// import { User } from './users.model';
// import { MessageService } from './users.service';

@ApiTags('Messages')
@Controller('message')
export class MessagesController {
  constructor(private usersService: MessagesService) {}

  @ApiOperation({ summary: 'Add message' })
  @ApiResponse({ status: 200, type: Message })
  @UsePipes(ValidationPipe)
  @Post()
  create(@Body() messageDto: CreateMessageDto) {
    return this.usersService.createMessage(messageDto);
  }

  @ApiOperation({ summary: 'Get all messages' })
  @ApiResponse({ status: 200, type: [Message] })
  @Get(':pass')
  getAll(@Param('pass') pass: string) {
    return this.usersService.getAll(pass);
  }

  @ApiOperation({ summary: 'Get last limit messages' })
  @ApiResponse({ status: 200, type: [Message] })
  @Get('/:pass/:number')
  GetLimit(@Param('pass') pass: string, @Param('number') number: number) {
    return this.usersService.getLimit(pass, number);
  }
}
