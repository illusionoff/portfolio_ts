import { CreateMessageDto } from 'src/messages/dto/create-message.dto';

export function mailTemplate(email: string, dto: CreateMessageDto): object {
  const { name, message } = dto;
  return {
    from: process.env.EMAIL_FROM,
    to: email,
    subject: 'Сообщение с моего сайта портфолио',
    text: `Сообщение с моего сайта портфолио.${name}: ${message}`,
    html: `
    <h1>Мой сайт портфолио</h1>
    <p>Имя: ${name}</p>
    <hr />
    Сообщение:  ${message}
    `,
  };
}
