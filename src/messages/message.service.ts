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
    const message = await this.messageRepository.create(dto);
    await this.mailService.sendMessageConfirmation(message.name, message.message);
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
