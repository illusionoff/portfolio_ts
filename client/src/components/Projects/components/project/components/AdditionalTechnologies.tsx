import { FC } from 'react';
import { IAdditionalTechnology } from '../interfaces/Project';
import { v4 as uuidv4 } from 'uuid';

interface AdditionalTechnologiesProps {
  additionalTechnologies: IAdditionalTechnology[];
}

export const AdditionalTechnologies: FC<AdditionalTechnologiesProps> = ({ additionalTechnologies }) => {
  const id = `hd-${uuidv4()}`;
  return (
    <>
      <div className='spravca'>
        <input type='checkbox' id={id} className='reference' />
        <h6>Дополнительные технологии, библиотеки</h6>
        <label htmlFor={id}>
          <span>Показать / Скрыть</span>
        </label>
        <span className='story'>
          <table className='striped'>
            <tbody>
              {additionalTechnologies &&
                additionalTechnologies.map((technology) => (
                  <tr key={uuidv4()}>
                    <td>{technology.technology}</td>
                    <td>{technology.text}</td>
                  </tr>
                ))}
            </tbody>
          </table>
        </span>
      </div>
    </>
  );
};
