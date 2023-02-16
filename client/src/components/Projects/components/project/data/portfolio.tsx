import { IProject } from '../interfaces/Project';

export const PortfolioData: IProject = {
  description: {
    title: 'Разработка сайта портфолио',
    titleDetailed: '',
    titleUrl: 'Siniakoualex.com',
    imgSrc: 'images/icons8-64-portfolio.png',
    imgAlt: 'Cайта портфолио',
    href: '',
    role: 'Full Stack',
    interval: 'Начал примерно весной 2021г. (2 месяца, позже рефакторинг)',
    text: 'Сайт портфолио на котором Вы находитесь',
  },
  mainFunctions: {
    link: {
      url: 'https://siniakoualex.com/api/docs',
      text: 'Swagger',
      id: 5,
    },
    functions: [
      'Адаптивный дизайн',
      'Отправка письма с сообщением из формы обратной связи на мой Email',
      'Отправка краткого SMS сообщения на мой номер телефона',
      'Запись сообщений обратной связи в БД',
      'API просмотра сообщений обратной связи',
      'Описание API с помощью Swagger и просмотр по адресу',
    ],
  },
  mainTechnologies: [
    'TypeScript',
    'Nodejs, Nestjs, npm, REST API',
    'React, materializecss',
    'PostgreSQL, sequelize',
    'Swagget REST API',
    'eslint, prettier',
  ],
  additionalTechnologies: [
    {
      technology: 'config',
      text: 'библиотека конфигурационных данных',
    },
    {
      technology: 'react-scroll',
      text: 'библиотека удобного скроллинга по ссылкам',
    },
    {
      technology: 'class-validator',
      text: 'валидация форм',
    },
    {
      technology: 'class-transformer',
      text: 'преобразовать обычный объект в какой-либо экземпляр класса и наоборот',
    },
    {
      technology: 'bcrypt',
      text: 'хеширования паролей',
    },
    {
      technology: 'axios',
      text: 'выполнение запросов HTTP',
    },
    {
      technology: 'nodemailer',
      text: 'отправка почты',
    },
    {
      technology: 'concurrently',
      text: 'одновременное выполнение нескольких команд, процессов для разработки',
    },
    {
      technology: 'fontawesomecom',
      text: 'иконки',
    },
  ],
  links: [
    {
      grid: 'col s12 m2 link',
      aHref: 'https://github.com/illusionoff/portfolio_ts',
      aDataTooltip: 'github',
      aclassName: 'btn-floating btn-large waves-effect waves-light brown tooltipped',
      gridText: 'col s12 m10 link text text-newline',
      text: 'https://github.com/illusionoff/portfolio_ts',
      className: 'className',
      a: {
        iClassName: 'fa fa-github-square fa-fw',
      },
    },
    {
      grid: 'col s12 m2 link',
      aHref: 'https://siniakoualex.com/api/docs/',
      aDataTooltip: 'Swagger',
      aclassName: 'tooltipped',
      gridText: 'col s12 m10 link text',
      text: 'Описание API с помощью Swagger',
      className: 'responsive-img center-block',
      img: {
        alt: 'Swagger',
        src: 'images/swagger_128px.png',
        width: '56',
        height: '56',
      },
    },
  ],
};
