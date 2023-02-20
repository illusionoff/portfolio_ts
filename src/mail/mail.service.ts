import { Injectable } from '@nestjs/common';
import { MailerService } from '@nestjs-modules/mailer';
import { MessageDto } from 'src/messages/dto/message.dto';
import { mailTemplate } from 'src/mail/mail-template/mail-template';
import { IMessageSender } from 'src/messages/message.service';

@Injectable()
export class MailService implements IMessageSender {
  constructor(private mailerService: MailerService) {}

  async send(message: MessageDto): Promise<string> {
    try {
      const EMAIL_TO_1: string = process.env.EMAIL_TO_1;
      const EMAIL_TO_2: string = process.env.EMAIL_TO_2;
      const emailList: string[] = [EMAIL_TO_1, EMAIL_TO_2];
      const promises: Promise<string>[] = emailList.map((email: string) =>
        this.mailerService
          .sendMail(mailTemplate(email, message))
          .then(() => Promise.resolve<string>('Email sent'))
          .catch((error) => Promise.reject<string>(`Email: ${email} ${error}`)),
      );
      const rawRes: PromiseSettledResult<string>[] = await Promise.allSettled(promises);
      const res = rawRes.filter(
        (res) => res.status === 'rejected',
      ) as PromiseFulfilledResult<any>[];
      if (res && res.length > 0) {
        const strError = res.map((promice) => {
          delete promice.status;
          return `Ошибка отправки email:  ${JSON.stringify(promice)}`;
        });
        return Promise.reject<string>(strError.join(','));
      }
      return 'emails sent';
    } catch (error) {
      console.error(`Error sending email: ${error.message}`);
      return Promise.reject(error);
    }
  }
}
