import { Body, Controller, Get, Param, Post, UsePipes } from '@nestjs/common';
import { ValidationPipe } from 'src/pipes/validation.pipe';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { MessageDto } from './dto/message.dto';
import { Message } from './message.model';
import { MessageService } from './message.service';

@ApiTags('Messages')
@Controller('message')
export class MessageController {
  constructor(private messageService: MessageService) {}

  @ApiOperation({ summary: 'Add message' })
  @ApiResponse({ status: 200, type: Message })
  @UsePipes(ValidationPipe)
  @Post()
  create(@Body() message: MessageDto) {
    return this.messageService.createMessage(message);
  }

  @ApiOperation({ summary: 'Get all messages' })
  @ApiResponse({ status: 200, type: [Message] })
  @Get(':pass')
  getAll(@Param('pass') pass: string) {
    return this.messageService.getAll(pass);
  }

  @ApiOperation({ summary: 'Get last limit messages' })
  @ApiResponse({ status: 200, type: [Message] })
  @Get('/:pass/:number')
  GetLimit(@Param('pass') pass: string, @Param('number') number: number) {
    return this.messageService.getLimit(pass, number);
  }
}
