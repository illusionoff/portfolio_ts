import { Injectable } from '@nestjs/common';
import { MailService } from 'src/mail/mail.service';
import { MessageDto } from './dto/message.dto';
import { SmsService } from 'src/sms/sms.service';
import { DatebaseService } from 'src/datebase/datebase.service';

export interface IMessageSender {
  send(message: MessageDto): Promise<string>;
}

@Injectable()
export class MessageService {
  constructor(
    private mailService: MailService,
    private datebaseService: DatebaseService,
    private smsService: SmsService,
  ) {}
  async createMessage(message: MessageDto): Promise<{ message: string }> {
    const DataBase = this.datebaseService.send(message);
    const Mail = this.mailService.send(message);
    const Sms = this.smsService.send(message);
    const sendArr: Promise<any>[] = [DataBase, Mail, Sms];
    const rawRes = await Promise.allSettled(sendArr);
    const resultPromises = rawRes.map((item, index) => console.log(`${index} promise`, item));
    const resRejected = rawRes.filter(
      (res: PromiseSettledResult<any>) => res.status === 'rejected',
    ) as PromiseSettledResult<unknown>[];
    if (rawRes.length === resRejected.length) {
      const strError = resRejected.map((promice) => {
        delete promice.status;
        return `Ошибка отправки:  ${JSON.stringify(promice)}`;
      });
      console.log(`Что-то пошло не так, сообщение не доставлено: ${strError} `);
      return { message: 'Что-то пошло не так, сообщение не доставлено' };
    }
    return { message: 'Сообщение доставлено' };
  }
}
