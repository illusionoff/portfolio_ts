import { HttpModule } from '@nestjs/axios';
import { Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';
import { DatebaseService } from 'src/datebase/datebase.service';
import { MailModule } from 'src/mail/mail.module';
import { SmsService } from 'src/sms/sms.service';
import { MessageController } from './message.controller';
import { Message } from './message.model';
import { MessageService } from './message.service';

@Module({
  controllers: [MessageController],
  providers: [MessageService, SmsService, DatebaseService],
  imports: [SequelizeModule.forFeature([Message]), MailModule, HttpModule],
})
export class MessageModule {}
