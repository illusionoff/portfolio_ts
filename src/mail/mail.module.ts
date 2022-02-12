// import * as path from 'path';
// import { join } from 'path';
import { Module } from '@nestjs/common';
import { MailService } from './mail.service';
import { MailerModule } from '@nestjs-modules/mailer';
// import { HandlebarsAdapter } from '@nestjs-modules/mailer/dist/adapters/handlebars.adapter';
import { ConfigModule } from '@nestjs/config';
import { mailTransport } from 'src/mail/mail-transport/mail-transport';

@Module({
  providers: [MailService],
  imports: [
    ConfigModule.forRoot({
      envFilePath: `.${process.env.NODE_ENV}.env`,
    }),
    MailerModule.forRoot(mailTransport()),
  ],
  exports: [MailService],
})
export class MailModule {}
