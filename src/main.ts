import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  // const app = await NestFactory.create(AppModule);
  // await app.listen(3000);

  const PORT = process.env.PORT || 5000;
  const app = await NestFactory.create(AppModule);

  // const config = new DocumentBuilder()
  //   .setTitle('Урок по продвинутому BACKEND')
  //   .setDescription('Документация REST API')
  //   .setVersion('1.0.0')
  //   .addTag('ULBI TV')
  //   .build();

  // const document = SwaggerModule.createDocument(app, config);
  // SwaggerModule.setup('/api/docs', app, document);
  // app.useGlobalGuards(JwtAuthGuard); // можно ко всем сразу доступам ограничить только авторизованным пользователям

  await app.listen(PORT, () => console.log(`Server started on port =${PORT}`));
}
bootstrap();
