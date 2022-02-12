// import { Injectable } from '@nestjs/common';

// @Injectable()
// export class MessageService {}

import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { MailService } from 'src/mail/mail.service';
import { CreateMessageDto } from './dto/create-message.dto';
import { Message } from './message.model';
// import { RolesService } from 'src/roles/roles.service';
// import { CreateUserDto } from './dto/create-user.dto';
// import { User } from './users.model';

@Injectable()
export class MessagesService {
  constructor(
    @InjectModel(Message)
    private messageRepository: typeof Message,
    private mailService: MailService,
  ) {} // userRepository - это название модели базы данных
  // private roleService: RolesService) {} // userRepository - это название модели базы данных

  async createMessage(dto: CreateMessageDto) {
    const EMAIL_TO_1 = process.env.EMAIL_TO_1;
    const EMAIL_TO_2 = process.env.EMAIL_TO_2;
    const message = await this.messageRepository.create(dto);
    const promise1 = this.mailService.sendMessageConfirmation(EMAIL_TO_1, message.name, message.message);
    const promise2 = this.mailService.sendMessageConfirmation(EMAIL_TO_2, message.name, message.message);
    // await this.mailService.sendMessageConfirmation(message.name, message.message);
    await Promise.all([promise1, promise2]).catch((err) => {
      err.message = 'error email send:' + err.message;
      throw err;
    });
    // const role = await this.roleService.getRoleByValue('ADMIN');
    // await user.$set('roles', [role.id]);
    // user.roles = [role];
    // return user;
    return message;
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
