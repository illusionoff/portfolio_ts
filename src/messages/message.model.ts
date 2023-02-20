import { Model, Table, Column, DataType } from 'sequelize-typescript';
import { ApiProperty } from '@nestjs/swagger';

interface MessageCreationAttrs {
  name: string;
  message: string;
}

@Table({ tableName: 'portfolio_messages_ts', createdAt: true, updatedAt: false })
export class Message extends Model<Message, MessageCreationAttrs> {
  @Column({
    type: DataType.INTEGER,
    unique: true,
    autoIncrement: true,
    primaryKey: true,
  })
  id: number;

  @ApiProperty({ example: 'Alex', description: 'You name' })
  @Column({ type: DataType.STRING, allowNull: false })
  name: string;

  @ApiProperty({ example: 'Hello Alex. How are you?', description: 'You message' })
  @Column({ type: DataType.STRING, allowNull: false })
  message: string;
}
