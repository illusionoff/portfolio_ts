import { HttpModule } from '@nestjs/axios';
import { Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';
import { MailModule } from 'src/mail/mail.module';
import { SmsService } from 'src/sms/sms.service';
import { MessagesController } from './message.controller';
import { Message } from './message.model';
import { MessagesService } from './message.service';

@Module({
  controllers: [MessagesController],
  providers: [MessagesService, SmsService],
  imports: [SequelizeModule.forFeature([Message]), MailModule, HttpModule],
})
export class MessageModule {}
