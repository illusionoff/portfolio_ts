import { Injectable } from '@nestjs/common';
import { HttpService } from '@nestjs/axios';
import { lastValueFrom, map } from 'rxjs';
import { MessageDto } from 'src/messages/dto/message.dto';
import { IMessageSender } from 'src/messages/message.service';

@Injectable()
export class SmsService implements IMessageSender {
  constructor(private httpService: HttpService) {}

  async send(messageFull: MessageDto): Promise<string> {
    try {
      let { name, message } = messageFull;
      if (name.length > 10) name = name.substring(0, 10);
      if (message.length > 30) message = message.substring(0, 30);
      const strToken = `${process.env.CONFIG_SMS_URL}?token=${process.env.CONFIG_SMS_TOKEN}`;
      const strMessageName = `&message=name:${encodeURIComponent(name)}:`;
      const strMessageMessage = `message:${encodeURIComponent(message)}`;
      const strPhone = `&phone=${process.env.CONFIG_SMS_PHONE}`;
      const urlSMS: string = strToken + strMessageName + strMessageMessage + strPhone;
      const result = lastValueFrom<string>(
        this.httpService.get(urlSMS).pipe(map((res) => res.data)),
      )
        .then(() => Promise.resolve<string>('SMS sent'))
        .catch((error: Error) => Promise.reject(`SMS sending error: ${error}`));
      return result;
    } catch (error) {
      console.log(error);
      console.error(`Error sending SMS: ${error.message}`);
      return `Error sending SMS: ${error.message}`;
    }
  }
}
