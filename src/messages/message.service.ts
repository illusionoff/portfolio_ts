// import { Injectable } from '@nestjs/common';

// @Injectable()
// export class MessageService {}

import { HttpService } from '@nestjs/axios';
import { lastValueFrom, map } from 'rxjs';
// import { map } from 'rxjs/operators';
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import * as bcrypt from 'bcrypt';
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
    const EMAIL_TO_1 = process.env.EMAIL_TO_1;
    const EMAIL_TO_2 = process.env.EMAIL_TO_2;
    // console.log('mail.service EMAIL_TO_1=', EMAIL_TO_1);
    // const mailResult = this.mailService.sendMessageConfirmation(dto);
    const smsResult = this.smsService.sendSMS(dto);
    const mailResult1 = this.mailService.sendMessageConfirmation(EMAIL_TO_1, dto);
    const mailResult2 = this.mailService.sendMessageConfirmation(EMAIL_TO_2, dto);
    const rawRes = await Promise.allSettled([BDResult, smsResult, mailResult1, mailResult2]);
    const res = rawRes.filter((res) => res.status === 'fulfilled') as PromiseFulfilledResult<any>[];
    const ReturnBDResult = res[0].value;
    console.log('ReturnBDResult=', ReturnBDResult);
    // const role = await this.roleService.getRoleByValue('ADMIN');
    // await user.$set('roles', [role.id]);
    // user.roles = [role];
    // return user;{ message: 'Сообщение доставлено' }
    // return ReturnBDResult;
    return { message: 'Сообщение доставлено' };
  }

  private async comparePass(passReq, passTrue) {
    const saltOrRounds = 10;
    const hashPassword = await bcrypt.hash(passTrue, saltOrRounds);
    return await bcrypt.compare(passReq, hashPassword);
  }

  async getAll(pass) {
    const isMatch = await this.comparePass(pass, process.env.PASS_GETALLMESSAGES);
    if (isMatch) {
      const users = await this.messageRepository.findAll({ include: { all: true } });
      return users;
    }
    return 'Access denied. Wrong password';
  }

  // async getUserByEmail(email: string) {
  //   const user = await this.userRepository.findOne({ where: { email }, include: { all: true } });
  //   return user;
  // }

  async getLimit(pass, number) {
    const isMatch = await this.comparePass(pass, process.env.PASS_GETALLMESSAGES);
    if (isMatch) {
      return await this.messageRepository.findAll({
        order: [['createdAt', 'DESC']],
        limit: number,
      });
    }
    return 'Access denied. Wrong password';
  }
}
