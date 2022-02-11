import { Module } from '@nestjs/common';
import { MessageModule } from './messages/message.module';
import { ConfigModule } from '@nestjs/config';
import { Message } from './messages/message.model';
import { SequelizeModule } from '@nestjs/sequelize';
// @Module({
//   imports: [],
//   controllers: [AppController],
//   providers: [AppService],
// })

@Module({
  imports: [
    ConfigModule.forRoot({
      envFilePath: `.${process.env.NODE_ENV}.env`,
    }),
    SequelizeModule.forRoot({
      dialect: 'postgres',
      host: process.env.POSTGRES_HOST,
      port: Number(process.env.POSTGRES_PORT),
      username: process.env.POSTGRES_USER,
      password: process.env.POSTGRES_PASSWORD,
      database: process.env.POSTGRES_DB,
      // models: [User, Role, UserRoles],
      models: [Message],
      autoLoadModels: true,
    }),
    MessageModule,
  ],
})
export class AppModule {}
