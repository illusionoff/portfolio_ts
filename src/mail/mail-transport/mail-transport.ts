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
      // from: process.env.EMAIL_FROM,
      from: `"Alex" <${process.env.EMAIL_FROM}>`,
    },
    // template: {
    //   // dir: path.join(__dirname, 'templates'), 
    //   // dir: path.join(process.env.PWD, 'templates', 'confirmation'),
    //   dir: process.cwd() + '/templates/confirmation',
    //   adapter: new HandlebarsAdapter(), // or new PugAdapter() or new EjsAdapter()
    //   options: {
    //     strict: true,
    //   },
    // },
  };
}
