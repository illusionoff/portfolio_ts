import { Injectable } from '@nestjs/common';
import { CreateMessageDto } from 'src/messages/dto/create-message.dto';

@Injectable()
export class SmsService {
  // constructor(private smsService: SmsService) {}

  async sendSMS(dto: CreateMessageDto): Promise<void> {
    try {
      // let name = dto.name;
      // let message = dto.message;
      // let { name, message } = dto;
      // await this.mailerService.sendMail(mailTemplate(email, name, message));

      // let { name, message } = req.body;
      // if (name.length > 10) name = name.substring(0, 10)
      // if (message.length > 30) message = message.substring(0, 30)
      // console.log('name SMS=', name);
      // console.log('message SMS=', message);
      // const urlSMS = `${CONFIGSMS}?token=${TOKEN}&message=name:${encodeURIComponent(name)}:message:${encodeURIComponent(message)}&phone=${PHONE}`; // http://www.mysite.ru/index.php\
      // console.log('urlSMS=', urlSMS);
      // let responseSMS = await fetch(urlSMS);
      // if (!responseSMS.ok) {
      //   // throw new Error(responseSMS.status); // 404
      //   console.log('responseSMS.status', responseSMS.status);
      //   message = 'SMS:err ' + message;
      // }
      // let result = await responseSMS.json();
      // console.log('SMS:', result);
    } catch (e) {
      console.log('Error My 1');
      console.log(e);
    }
  }
}
