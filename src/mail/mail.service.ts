import { Injectable } from '@nestjs/common';
import { MailerService } from '@nestjs-modules/mailer';
import { CreateMessageDto } from 'src/messages/dto/create-message.dto';
import { mailTemplate } from 'src/mail/mail-template/mail-template';

@Injectable()
export class MailService {
  constructor(private mailerService: MailerService) {}

  async sendMessageConfirmation(email: string, dto: CreateMessageDto): Promise<any> {
    try {
      return await this.mailerService.sendMail(mailTemplate(email, dto));
    } catch (e) {
      console.log('Error My 1');
      console.log(e);
    }
  }
}
