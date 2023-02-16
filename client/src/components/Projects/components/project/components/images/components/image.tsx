import { FC } from 'react';
import { IImages } from '../../../interfaces/Project';

interface ImageProps {
  image: IImages;
}

export const Image: FC<ImageProps> = ({ image }) => {
  return (
    <>
      <div className={image.grid}>
        <div className='card-image waves-effect waves-block waves-light'>
          <img alt={image.imgAlt} src={image.imgSrc} className='activator'></img>
        </div>
      </div>
    </>
  );
};
