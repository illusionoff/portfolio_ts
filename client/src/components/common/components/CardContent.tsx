import { FC } from 'react';
import { IDetails } from '../interfaces/Details';

interface CardContentProps {
  details: IDetails;
}
export const CardContent: FC<CardContentProps> = ({ details: { title, titleUrl, location, items } }) => {
  return (
    <div className='col s12 m6'>
      <div className='card'>
        <div className='card-content'>
          <p>
            <span className='card-title'>
              <a target='_blank' rel='noreferrer' href={titleUrl} className='teal-text hoverline'>
                {title}
              </a>
            </span>
          </p>
          <p className='grey-text'>{location}</p>
          <ul>
            {items.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};
