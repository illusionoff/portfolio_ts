import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import * as bcrypt from 'bcrypt';
import { MailService } from 'src/mail/mail.service';
import { MessageDto } from './dto/message.dto';
import { Message } from './message.model';
import { SmsService } from 'src/sms/sms.service';

@Injectable()
export class MessageService {
  constructor(
    @InjectModel(Message)
    private messageRepository: typeof Message,
    private mailService: MailService,
    private smsService: SmsService,
  ) {}
  async createMessage(message: MessageDto) {
    const BDResult = this.messageRepository.create(message);
    const EMAIL_TO_1 = process.env.EMAIL_TO_1;
    const EMAIL_TO_2 = process.env.EMAIL_TO_2;
    const smsResult = this.smsService.sendSMS(message);
    const mailResult1 = this.mailService.sendMessageConfirmation(EMAIL_TO_1, message);
    const mailResult2 = this.mailService.sendMessageConfirmation(EMAIL_TO_2, message);
    const rawRes = await Promise.allSettled([BDResult, smsResult, mailResult1, mailResult2]);
    const res = rawRes.filter((res) => res.status === 'fulfilled') as PromiseFulfilledResult<any>[];
    const ReturnBDResult = res[0].value;
    console.log('ReturnBDResult=', ReturnBDResult);
    return { message: 'Сообщение доставлено' };
  }

  private async comparePass(passReq, passTrue) {
    const saltOrRounds = 10;
    const hashPassword = await bcrypt.hash(passTrue, saltOrRounds);
    return await bcrypt.compare(passReq, hashPassword);
  }

  async getAll(pass) {
    const isMatch = await this.comparePass(pass, process.env.PASS_GETALLMESSAGES);
    if (isMatch) {
      const users = await this.messageRepository.findAll({ include: { all: true } });
      return users;
    }
    return 'Access denied. Wrong password';
  }

  async getLimit(pass, number) {
    const isMatch = await this.comparePass(pass, process.env.PASS_GETALLMESSAGES);
    if (isMatch) {
      return await this.messageRepository.findAll({
        order: [['createdAt', 'DESC']],
        limit: number,
      });
    }
    return 'Access denied. Wrong password';
  }
}
