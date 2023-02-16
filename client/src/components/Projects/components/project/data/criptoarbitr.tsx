import { IProject } from '../interfaces/Project';

export const CriptoArbitrData: IProject = {
  description: {
    title: 'CriptoArbitr',
    titleDetailed: 'Freelance Junior Node.js developer',
    titleUrl: 'CriptoArbitr',
    imgSrc: 'images/favicon_criptoarbitr.png',
    imgAlt: 'CriptoArbitr logo',
    href: 'http://criptoarbitr.178.20.42.150.sslip.io',
    role: 'Full Stack',
    interval: ' Июнь 2021 — ноябрь 2021 (6 месяцев).',
    text: 'Исследование возможности извлечения прибыли на разнице курсов между двумя криптобиржами (межбиржевой арбитраж).',
  },
  images: [
    {
      grid: 'col s6 m3',
      imgSrc: 'images/criptoarbitr_1.png',
      imgAlt: 'Screenshot of CriptoArbitr web app',
    },
    {
      grid: 'col s6 m3',
      imgSrc: 'images/criptoarbitr_2.png',
      imgAlt: 'Screenshot of CriptoArbitr web app',
    },
    {
      grid: 'col s12 m6',
      imgSrc: 'images/criptoarbitr_3.png',
      imgAlt: 'Screenshot of CriptoArbitr web app',
    },
  ],
  mainFunctions: {
    functions: [
      'Получение данных котировок в реальном времени по спотовому рынку выбранной криптовалюты с бирж Gate.io и bithumb.pro',
      'Получение данных по комиссиям криптобиржи   bithumb.pro запись данных в .csv файл о котировках, дополнительных параметрах',
      'Активация записи данных в .csv файл по заданному значению необходимой прибыли  и выбор направления торговли',
      'Сбор статитстики и анализ скорости поступления сигналов с биржи bithumb.pro',
      'Загрузка актуальных файлов для визуализации с каталога запущенного проекта',
      'Визуализация данных в виде диаграмм',
      'Адаптивный дизай',
    ],
  },
  mainTechnologies: [
    'Nodejs, Express, npm',
    'React, materializecss, react-chartjs-2',
    'Nginx, docker, docker-compose, pm2',
    'ws, reconnecting-websocket',
    'mocha',
    'eslint',
  ],
  additionalTechnologies: [
    {
      technology: 'config',
      text: 'библиотека конфигурационных данных',
    },
    {
      technology: 'csv-parse',
      text: 'парсинг .csv файлов',
    },
    {
      technology: 'express-validator',
      text: 'валидация форм',
    },
    {
      technology: 'kill-port',
      text: 'уничтожение процесса на определенном порту',
    },
    {
      technology: 'node-fetch',
      text: 'аналог window.fetchAPI для node.js',
    },
    {
      technology: 'concurrently',
      text: 'одновременное выполнение нескольких команд, процессов',
    },
    {
      technology: 'cross-env',
      text: 'использование переменных среды на разных платформах',
    },
    {
      technology: 'nodemon',
      text: 'автоматического перезапуска проекта при изменении файлов проекта в dev',
    },
    {
      technology: 'chart.js',
      text: 'конфигурирование диаграмм и вывод на canvas',
    },
  ],
  links: [
    {
      grid: 'col s12 m2 link',
      aHref: 'http://criptoarbitr.178.20.42.150.sslip.io',
      aDataTooltip: 'CriptoArbitr',
      aclassName: 'tooltipped',
      gridText: 'col s12 m10 link text',
      text: 'Сайт проекта CriptoArbitr',
      className: 'className',
      img: {
        alt: 'CriptoArbitr logo',
        src: 'images/favicon_criptoarbitr.png',
        width: '56',
        height: '56',
      },
    },
    {
      grid: 'col s12 m2 link',
      aHref: 'https://github.com/illusionoff/reactcriptoarbitr_docker_composer_prod',
      aDataTooltip: 'github',
      aclassName: 'btn-floating btn-large waves-effect waves-light brown tooltipped',
      gridText: 'col s12 m10 link text text-newline',
      text: 'https://github.com/illusionoff/reactcriptoarbitr_docker_composer_prod',
      className: 'className',
      a: {
        iClassName: 'fa fa-github-square fa-fw',
      },
    },
    {
      grid: 'col s12 m2 link',
      aHref: 'https://github.com/illusionoff/reactcriptoarbitr_test_squeeze',
      aDataTooltip: 'github',
      aclassName: 'btn-floating btn-large waves-effect waves-light brown tooltipped',
      gridText: 'col s12 m10 link text text-newline',
      text: 'https://github.com/illusionoff/reactcriptoarbitr_test_squeeze',
      className: 'className',
      a: {
        iClassName: 'fa fa-github-square fa-fw',
      },
    },
  ],
};
