export function mailTemplate(email: string, name: string, message: string): object {
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
