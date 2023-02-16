import { MessageDto } from 'src/messages/dto/message.dto';

export function mailTemplate(email: string, messageFull: MessageDto): object {
  const { name, message } = messageFull;
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
