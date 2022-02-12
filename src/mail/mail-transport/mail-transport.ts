export function mailTransport(): object {
  return {
    transport: {
      service: 'gmail',
      host: 'smtp.gmail.com',
      port: Number(process.env.GMAIL_SETTINGS_PORT),
      secure: false,
      auth: {
        user: process.env.GMAIL_SETTINGS_AUTH_USER,
        pass: process.env.GMAIL_SETTINGS_AUTH_PASS,
      },
    },
    defaults: {
      from: `"Alex" <${process.env.EMAIL_FROM}>`,
    },
  };
}
