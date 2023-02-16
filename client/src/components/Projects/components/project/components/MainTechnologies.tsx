import { FC } from 'react';

interface MainTechnologiesProps {
  mainTechnologies: string[];
}

export const MainTechnologies: FC<MainTechnologiesProps> = ({ mainTechnologies }) => {
  return (
    <>
      <h6>ОСНОВНЫЕ ТЕХНОЛОГИИ, БИБЛИОТЕКИ</h6>
      <ul>{mainTechnologies && mainTechnologies.map((image, index) => <li key={index}>{image}</li>)}</ul>
    </>
  );
};
