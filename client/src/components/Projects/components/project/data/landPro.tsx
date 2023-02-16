import { IProject } from '../interfaces/Project';

export const LandProData: IProject = {
  description: {
    title: 'ООО "ЛэндПро"',
    titleDetailed: 'Junior Node.js Nest.js developer',
    titleUrl: 'landpro.site',
    imgSrc: 'images/landpro.png',
    imgAlt: 'landpro logo',
    href: 'https://landpro.site',
    role: 'Back-end',
    interval: 'Май 2022 — октябрь 2022 (6 месяцев).',
    text: '',
  },
  mainFunctions: {
    functions: [
      'Проектная работа. Разработка компьютерного программного обеспечения',
      'Рабочее название ПО - "Прокси"',
      'Наименование проекта - "Яндекс-Детский мир"',
      'Проект служит прослойкой между службой доставки Яндекс и магазинами "Детский мир" в России',
      'Единственный разработчик над этим проектом',
      'Также участвовал в разработке схожего проекта "Яндекс-Спортмастер"',
      'В качестве  frontend использовалась библиотека AdminJS - панель администратора основанная на React',
    ],
  },
  mainTechnologies: [
    'TypeScript',
    'Nodejs, Nestjs, npm, REST API',
    'React, AdminJS',
    'PostgreSQL, TypeORM',
    'eslint, prettier',
  ],
};
