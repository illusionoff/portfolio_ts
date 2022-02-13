import { Model, Table, Column, DataType, BelongsToMany } from 'sequelize-typescript';
import { ApiProperty } from '@nestjs/swagger';
// import { Role } from 'src/roles/roles.model';
// import { UserRoles } from 'src/roles/user-roles.model';
// import { DataType } from 'sequelize/types';

interface MessageCreationAttrs {
  name: string;
  message: string;
}

@Table({ tableName: 'portfolio_messages_ts', createdAt: true, updatedAt: false })
export class Message extends Model<Message, MessageCreationAttrs> {
  // @ApiProperty({ example: '990', description: 'Unique id' })
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

  // @ApiProperty({ example: 'true', description: 'Забанен или нет' })
  // @Column({ type: DataType.DATE, defaultValue: false })
  // time: timestamp;

  // @BelongsToMany(() => Role, () => UserRoles)
  // roles: Role[];
}
