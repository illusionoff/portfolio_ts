import { IProject } from '../interfaces/Project';

export const HomeMoneyCalcData: IProject = {
  description: {
    title: ' Разработка HomeMoneyCalc',
    titleDetailed: '',
    titleUrl: 'HomeMoneyCalc',
    imgSrc: 'https://178.20.42.150.sslip.io/favicon.png',
    imgAlt: 'HomeMoneyCalc logo',
    href: 'https://178.20.42.150.sslip.io',
    role: 'Full Stack',
    interval: 'Осень 2020, начало 2021 (6 месяцев).',
    text: 'Сервис позволяющий вести учет расходов и доходов.',
  },
  images: [
    {
      grid: 'col s6 m3',
      imgSrc: 'images/Homemoneycal_1.png',
      imgAlt: 'Screenshot of Homemoneycal web app',
    },
    {
      grid: 'col s6 m3',
      imgSrc: 'images/Homemoneycal_2.png',
      imgAlt: 'Screenshot of Homemoneycal web app',
    },
    {
      grid: 'col s6 m3',
      imgSrc: 'images/Homemoneycal_3.png',
      imgAlt: 'Screenshot of Homemoneycal web app',
    },
    {
      grid: 'col s6 m3',
      imgSrc: 'images/Homemoneycal_4.png',
      imgAlt: 'Screenshot of Homemoneycal web app',
    },
  ],
  mainFunctions: {
    functions: [
      'Адаптивный дизайн',
      'Авторизация через Google, Facebook, по паролю',
      'Отправка письма на Email о регистрации',
      'Восстановление забытого пароля через Email',
      'Создание пользовательских категорий расходов и доходов, задание цвета категорий',
      'Вывод статистики по расходам / доходам за день, месяц, год',
      'Возможность редактирования уже имеющихся данных',
      'Выбор способа отображения информации (диаграмма, таблица, диаграмма и таблица)',
      'Изменение порядка следования категорий',
    ],
  },
  mainTechnologies: [
    'Nodejs, Express, npm, REST API',
    'MongoDB, mongoose',
    'materializecss, handlebars',
    'Nginx, pm2',
    'passport.js, mocha',
    'eslint, prettier',
  ],
  additionalTechnologies: [
    {
      technology: 'express-validator',
      text: 'валидация форм',
    },
    {
      technology: 'winston',
      text: 'логирование',
    },
    {
      technology: 'helmet',
      text: 'защита приложений express через различные заголовки HTTP',
    },
    {
      technology: 'nodemailer',
      text: 'отправка почты',
    },
    {
      technology: 'csurf',
      text: 'для защиты сеансов сессии от подделки- взлома',
    },
    {
      technology: 'connect-mongodb-session',
      text: 'для хранения сеансов в MongoDB',
    },
    {
      technology: 'bcrypt',
      text: 'хеширования паролей',
    },
    {
      technology: 'crypto',
      text: 'хеширования строки для изменения забытого пароля',
    },
    {
      technology: 'connect-flash',
      text: 'для хранения и передачи сообщений',
    },
    {
      technology: 'moment-timezone',
      text: 'поддержка часовых поясов IANA для Moment.js',
    },
    {
      technology: 'nodemon',
      text: 'автоматического перезапуска проекта при изменении файлов проекта в dev',
    },
    {
      technology: 'underscore',
      text: 'библиотека функций. Использую для проверки на корректную дату _.isDate(date)',
    },
    {
      technology: 'fontawesomecom',
      text: 'иконки',
    },
    {
      technology: 'chart.js',
      text: 'конфигурирование диаграмм и вывод на canvas',
    },
  ],
  links: [
    {
      grid: 'col s12 m2 link',
      aHref: 'https://178.20.42.150.sslip.io',
      aDataTooltip: 'HomeMoneyCalc',
      aclassName: 'tooltipped',
      gridText: 'col s12 m10 link text',
      text: 'Сайт HomeMoneyCalc',
      className: 'className',
      img: {
        alt: 'HomeMoneyCalc logo',
        src: 'https://178.20.42.150.sslip.io/favicon.png',
        width: '56',
        height: '56',
      },
    },
    {
      grid: 'col s12 m2 link',
      aHref: 'https://github.com/illusionoff/homemoneycalcnew',
      aDataTooltip: 'github',
      aclassName: 'btn-floating btn-large waves-effect waves-light brown tooltipped',
      gridText: 'col s12 m10 link text text-newline',
      text: 'https://github.com/illusionoff/homemoneycalcnew',
      className: 'className',
      a: {
        iClassName: 'fa fa-github-square fa-fw',
      },
    },
  ],
};
