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
    // private httpService: HttpService,
    private smsService: SmsService,
  ) {} // userRepository - это название модели базы данных
  // private roleService: RolesService) {} // userRepository - это название модели базы данных

  async createMessage(dto: CreateMessageDto) {
    const BDResult = this.messageRepository.create(dto);
    const mailResult = this.mailService.sendMessageConfirmation(dto);
    const smsResult = this.smsService.sendSMS(dto);
    const [ReturnBDResult] = await Promise.all([BDResult, mailResult, smsResult]).catch((err) => {
      err.message = 'error email send:' + err.message;
      throw err;
    });
    // const role = await this.roleService.getRoleByValue('ADMIN');
    // await user.$set('roles', [role.id]);
    // user.roles = [role];
    // return user;
    return ReturnBDResult;
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
