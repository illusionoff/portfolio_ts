import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';

async function bootstrap() {
  const PORT = process.env.PORT || 5000;
  const app = await NestFactory.create(AppModule);

  const config = new DocumentBuilder()
    .setTitle('Site portfolio')
    .setDescription('Documentation REST API')
    .setVersion('1.0.0')
    .addTag('Siniakou Alex')
    .build();

  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('/api/docs', app, document);
  // app.useGlobalGuards(JwtAuthGuard); // можно ко всем сразу доступам ограничить только авторизованным пользователям

  await app.listen(PORT, () => console.log(`Server started on port =${PORT}`));
}
bootstrap();
