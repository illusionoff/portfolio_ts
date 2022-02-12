import { Injectable } from '@nestjs/common';
import { MailerService } from '@nestjs-modules/mailer';
import { CreateMessageDto } from 'src/messages/dto/create-message.dto';

@Injectable()
export class MailService {
  constructor(private mailerService: MailerService) {}

  async sendMessageConfirmation(email: string, dto: CreateMessageDto): Promise<void> {
    try {
      const name = dto.name;
      const message = dto.message;
      await this.mailerService.sendMail({
        to: email, //process.env.EMAIL_TO_1
        from: process.env.EMAIL_FROM,
        subject: 'Сообщение с моего сайта портфолио',
        text: `Сообщение с моего сайта портфолио.${name}: ${message}`,
        html: `
        <h1>Мой сайт портфолио</h1>
        <p>Имя: ${name}</p>
        <hr />
        Сообщение:  ${message}
        `,
      });
    } catch (e) {
      console.log('Error My 1');
      console.log(e);
    }
  }
}
