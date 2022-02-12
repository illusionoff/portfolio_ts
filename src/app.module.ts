import { Module } from '@nestjs/common';
import { MessageModule } from './messages/message.module';
import { ConfigModule } from '@nestjs/config';
import { Message } from './messages/message.model';
import { SequelizeModule } from '@nestjs/sequelize';

import { MailerModule } from '@nestjs-modules/mailer';
import { HandlebarsAdapter } from '@nestjs-modules/mailer/dist/adapters/handlebars.adapter';
import { MailModule } from './mail/mail.module';
import { SmsService } from './sms/sms.service';
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
    // MailerModule.forRoot({
    // transport: {
    //   host: 'smtp.example.com',
    //   port: 587,
    //   secure: false, // upgrade later with STARTTLS
    //   auth: {
    //     user: "username",
    //     pass: "password",
    //   },
    // },
    //   transport: {
    //     service: 'learnnodelang@gmail.com',
    //     port: 587,
    //     secure: false,
    //     auth: {
    //       user: 'learnnodelang@gmail.com',
    //       pass: 'pass16gmail',
    //     },
    //   },
    //   defaults: {
    //     from: '"nest-modules" <modules@nestjs.com>',
    //   },
    //   template: {
    //     dir: process.cwd() + '/templates/',
    //     adapter: new HandlebarsAdapter(), // or new PugAdapter()
    //     options: {
    //       strict: true,
    //     },
    //   },
    // }),
    MailModule,
  ],
  providers: [SmsService],
})
export class AppModule {}
