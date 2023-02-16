import { FC } from 'react';
import { IMainFunctions } from '../interfaces/Project';

interface MainFunctionsProps {
  mainFunctions: IMainFunctions;
}

interface LinkProps {
  url: string;
  text: string;
}

const Link: FC<LinkProps> = ({ url, text }) => (
  <a href={url} target='_blank' rel='noreferrer'>
    {text}
  </a>
);

export const MainFunctions: FC<MainFunctionsProps> = ({ mainFunctions: { functions, link } }) => {
  return (
    <>
      <h6>Основные функции</h6>
      <ul>
        {functions &&
          functions.map((func, index) => {
            // Дополнительная ссылка, если требуется. Где id это id в массиве functions к которой ссылку прикрепить
            if (link && index === link.id)
              return (
                <li key={index}>
                  {func} <Link url={link.url} text={link.text} />
                </li>
              );
            return <li key={index}>{func}</li>;
          })}
      </ul>
    </>
  );
};
