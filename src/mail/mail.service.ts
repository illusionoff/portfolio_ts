import { Injectable } from '@nestjs/common';
import { MailerService } from '@nestjs-modules/mailer';
import { CreateMessageDto } from 'src/messages/dto/create-message.dto';
import { mailTemplate } from 'src/mail/mail-template/mail-template';

@Injectable()
export class MailService {
  constructor(private mailerService: MailerService) {}

  async sendMessageConfirmation(dto: CreateMessageDto): Promise<any> {
    try {
      const { name, message } = dto;
      const EMAIL_TO_1 = process.env.EMAIL_TO_1;
      const EMAIL_TO_2 = process.env.EMAIL_TO_2;
      console.log('mail.service EMAIL_TO_1=', EMAIL_TO_1);
      const promiseMail1 = this.mailerService.sendMail(mailTemplate(EMAIL_TO_1, name, message));
      const promiseMail2 = this.mailerService.sendMail(mailTemplate(EMAIL_TO_2, name, message));
      const rawRes = await Promise.allSettled([promiseMail1, promiseMail2]);
      return rawRes.filter((res) => res.status === 'fulfilled') as PromiseFulfilledResult<any>[];
    } catch (e) {
      console.log('Error My 1');
      console.log(e);
    }
  }
}
