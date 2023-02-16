import { Injectable } from '@nestjs/common';
import { HttpService } from '@nestjs/axios';
import { lastValueFrom, map } from 'rxjs';
import { MessageDto } from 'src/messages/dto/message.dto';

@Injectable()
export class SmsService {
  constructor(private httpService: HttpService) {}

  async sendSMS(messageFull: MessageDto): Promise<void> {
    try {
      let { name, message } = messageFull;
      if (name.length > 10) name = name.substring(0, 10);
      if (message.length > 30) message = message.substring(0, 30);
      const strToken = `${process.env.CONFIG_SMS_URL}?token=${process.env.CONFIG_SMS_TOKEN}`;
      const strMessageName = `&message=name:${encodeURIComponent(name)}:`;
      const strMessageMessage = `message:${encodeURIComponent(message)}`;
      const strPhone = `&phone=${process.env.CONFIG_SMS_PHONE}`;
      const urlSMS = strToken + strMessageName + strMessageMessage + strPhone;
      return await lastValueFrom(this.httpService.get(urlSMS).pipe(map((res) => res.data)));
    } catch (e) {
      console.log(e);
    }
  }
}
