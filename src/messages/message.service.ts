// import { Injectable } from '@nestjs/common';

// @Injectable()
// export class MessageService {}

import { HttpService } from '@nestjs/axios';
import { lastValueFrom, map } from 'rxjs';
// import { map } from 'rxjs/operators';
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { MailService } from 'src/mail/mail.service';
import { CreateMessageDto } from './dto/create-message.dto';
import { Message } from './message.model';
import { SmsService } from 'src/sms/sms.service';
// import { RolesService } from 'src/roles/roles.service';
// import { CreateUserDto } from './dto/create-user.dto';
// import { User } from './users.model';

@Injectable()
export class MessagesService {
  constructor(
    @InjectModel(Message)
    private messageRepository: typeof Message,
    private mailService: MailService,
    private httpService: HttpService,
    // private smsService: SmsService,
  ) {} // userRepository - это название модели базы данных
  // private roleService: RolesService) {} // userRepository - это название модели базы данных

  async createMessage(dto: CreateMessageDto) {
    const EMAIL_TO_1 = process.env.EMAIL_TO_1;
    const EMAIL_TO_2 = process.env.EMAIL_TO_2;
    const messageReturn = await this.messageRepository.create(dto);
    const promise1 = this.mailService.sendMessageConfirmation(EMAIL_TO_1, dto);
    const promise2 = this.mailService.sendMessageConfirmation(EMAIL_TO_2, dto);
    // await this.mailService.sendMessageConfirmation(message.name, message.message);
    await Promise.all([promise1, promise2]).catch((err) => {
      err.message = 'error email send:' + err.message;
      throw err;
    });

    let { name, message } = dto;
    if (name.length > 10) name = name.substring(0, 10);
    if (message.length > 30) message = message.substring(0, 30);
    console.log('message=', message);
    const CONFIGSMS = process.env.CONFIG_SMS_URL;
    const TOKEN = process.env.CONFIG_SMS_TOKEN;
    const PHONE = process.env.CONFIG_SMS_PHONE;
    const urlSMS = `${CONFIGSMS}?token=${TOKEN}&message=name:${encodeURIComponent(name)}:message:${encodeURIComponent(message)}&phone=${PHONE}`;
    const smsResponse = await lastValueFrom(this.httpService.get(urlSMS)
      .pipe(map((res) => res.data))
    );
    console.log(smsResponse);


    // // return response.data;
    // // // findAll(): Observable<AxiosResponse<Cat[]>> {
    // //   return this.httpService.get('http://localhost:3000/cats');
    // // // }
    // const role = await this.roleService.getRoleByValue('ADMIN');
    // await user.$set('roles', [role.id]);
    // user.roles = [role];
    // return user;
    return messageReturn;
  }

  async getAllUsers() {
    const users = await this.messageRepository.findAll({ include: { all: true } });
    return users;
  }

  // async getUserByEmail(email: string) {
  //   const user = await this.userRepository.findOne({ where: { email }, include: { all: true } });
  //   return user;
  // }
}
