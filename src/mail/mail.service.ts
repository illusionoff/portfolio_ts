import { Injectable } from '@nestjs/common';
import { MailerService } from '@nestjs-modules/mailer';
import { MessageDto } from 'src/messages/dto/message.dto';
import { mailTemplate } from 'src/mail/mail-template/mail-template';

@Injectable()
export class MailService {
  constructor(private mailerService: MailerService) {}

  async sendMessageConfirmation(email: string, dto: MessageDto): Promise<any> {
    try {
      return await this.mailerService.sendMail(mailTemplate(email, dto));
    } catch (e) {
      console.log(e);
    }
  }
}
