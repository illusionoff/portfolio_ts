import { FC } from 'react';
import { IDescription } from '../interfaces/Project';

interface DescriptionProps {
  description: IDescription;
}

export const Description: FC<DescriptionProps> = ({ description }) => {
  const { title, imgSrc, imgAlt, href, role, interval, text, titleUrl, titleDetailed } = description;
  return (
    <>
      <div className='row'>
        <div className='col s12 m2'>
          <a href={href} target='_blanc'>
            <img alt={imgAlt} src={imgSrc} className='responsive-img center-block'></img>
          </a>
        </div>
        <div className='col s12 m10'>
          <p>
            <span className='card-title'>{title}</span>
          </p>
        </div>
      </div>
      <div className='role'>{role}</div>
      <p>
        <span className='card-title'>{titleDetailed}</span>
      </p>
      <div>
        <em className='gray-text'>
          <a href={href} target='_blanc'>
            {titleUrl}{' '}
          </a>
          {interval}
          <p>{text}</p>
        </em>
      </div>
    </>
  );
};
