import { Injectable } from '@nestjs/common';
import { HttpService } from '@nestjs/axios';
import { lastValueFrom, map } from 'rxjs';
import { CreateMessageDto } from 'src/messages/dto/create-message.dto';

@Injectable()
export class SmsService {
  constructor(private httpService: HttpService) {}

  async sendSMS(dto: CreateMessageDto): Promise<void> {
    try {
      // await this.mailerService.sendMail(mailTemplate(email, name, message));

      // if (name.length > 10) name = name.substring(0, 10);
      // if (message.length > 30) message = message.substring(0, 30);
      // console.log('name SMS=', name);
      // console.log('message SMS=', message);
      // const urlSMS = `${CONFIGSMS}?token=${TOKEN}&message=name:${encodeURIComponent(name)}:message:${encodeURIComponent(message)}&phone=${PHONE}`; // http://www.mysite.ru/index.php\
      // console.log('urlSMS=', urlSMS);


      // const smsResponse = await this.httpServic.get('http://localhost:3000/cats').toPromise();
      // console.log(smsResponse.data);
      // return response.data;
      // // findAll(): Observable<AxiosResponse<Cat[]>> {
      //   return this.httpService.get('http://localhost:3000/cats');
      // // }
      // const response = await this.httpService
      //   .get('https://abc.com/api/v2/branches')
      //   .toPromise()
      //   .catch((err) => {
      //     throw new HttpException(err.response.data, err.response.status);
      //   });

      // // return response.data;

      // let responseSMS = await fetch(urlSMS);
      // if (!responseSMS.ok) {
      //   // throw new Error(responseSMS.status); // 404
      //   console.log('responseSMS.status', responseSMS.status);
      //   message = 'SMS:err ' + message;
      // }
      // let result = await responseSMS.json();
      // console.log('SMS:', result);


      let { name, message } = dto;
      if (name.length > 10) name = name.substring(0, 10);
      if (message.length > 30) message = message.substring(0, 30);
      console.log('message=', message);
      const CONFIGSMS = process.env.CONFIG_SMS_URL;
      const TOKEN = process.env.CONFIG_SMS_TOKEN;
      const PHONE = process.env.CONFIG_SMS_PHONE;
      const urlSMS = `${CONFIGSMS}?token=${TOKEN}&message=name:${encodeURIComponent(name)}:message:${encodeURIComponent(message)}&phone=${PHONE}`;
      // const smsResponse = await lastValueFrom(this.httpService.get(urlSMS)
      //   .pipe(map((res) => res.data))
      // );
      return await lastValueFrom(this.httpService.get(urlSMS)
        .pipe(map((res) => res.data))
      );
      // console.log('1 smsResponse=', smsResponse);
      // return smsResponse;
    } catch (e) {
      console.log('Error My 1');
      console.log(e);
    }
  }
}
