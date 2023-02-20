import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { MessageDto } from 'src/messages/dto/message.dto';
import { Message } from 'src/messages/message.model';
import { IMessageSender } from 'src/messages/message.service';
import * as bcrypt from 'bcrypt';

@Injectable()
export class DatebaseService implements IMessageSender {
  constructor(
    @InjectModel(Message)
    private messageRepository: typeof Message,
  ) {}
  async send(message: MessageDto): Promise<string> {
    try {
      return this.messageRepository
        .create(message)
        .then(() => 'message written to database')
        .catch((error) => Promise.reject(`Error writing message to database: ${error.message}`));
    } catch (error) {
      console.error(`Error writing message to database: ${error.message}`);
      return `Error writing message to database: ${error.message}`;
    }
  }

  private async comparePass(passReq: string, passTrue: string): Promise<boolean> {
    const saltOrRounds = 10;
    const hashPassword = await bcrypt.hash(passTrue, saltOrRounds);
    return await bcrypt.compare(passReq, hashPassword);
  }

  async getAll(pass: string): Promise<Message[]> {
    const isMatch = await this.comparePass(pass, process.env.PASS_GETALLMESSAGES);
    if (isMatch) {
      return await this.messageRepository.findAll({ include: { all: true } });
    }
    throw new Error('Access denied. Wrong password');
  }

  async getLimit(pass: string, number: number): Promise<Message[]> {
    const isMatch = await this.comparePass(pass, process.env.PASS_GETALLMESSAGES);
    if (isMatch) {
      return await this.messageRepository.findAll({
        order: [['createdAt', 'DESC']],
        limit: number,
      });
    }
    throw new Error('Access denied. Wrong password');
  }
}
