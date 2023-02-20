import { Module } from '@nestjs/common';
import { MessageModule } from './messages/message.module';
import { ConfigModule } from '@nestjs/config';
import { Message } from './messages/message.model';
import { SequelizeModule } from '@nestjs/sequelize';
import { MailModule } from './mail/mail.module';
import { ServeStaticModule } from '@nestjs/serve-static';
import { join } from 'path';
import { DatebaseService } from './datebase/datebase.service';

@Module({
  imports: [
    ConfigModule.forRoot({
      envFilePath: `.${process.env.NODE_ENV}.env`,
    }),
    ServeStaticModule.forRoot({
      rootPath: join(__dirname, '..', 'client', 'build'),
      exclude: ['/api*'],
    }),
    SequelizeModule.forRoot({
      dialect: 'postgres',
      host: process.env.POSTGRES_HOST,
      port: Number(process.env.POSTGRES_PORT),
      username: process.env.POSTGRES_USER,
      password: process.env.POSTGRES_PASSWORD,
      database: process.env.POSTGRES_DB,
      models: [Message],
      autoLoadModels: true,
    }),
    MessageModule,
    MailModule,
  ],
  // providers: [DatebaseService],
})
export class AppModule {}
