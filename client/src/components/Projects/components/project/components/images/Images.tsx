import { FC } from 'react';

import { IProject } from '../../interfaces/Project';
import { Image } from './components/image';

interface ImagesProps {
  images: IProject['images'];
}

export const Images: FC<ImagesProps> = ({ images }) => {
  return (
    <>
      <div className='card-project'>
        <div className='row'>{images && images.map((image, index) => <Image key={index} image={image} />)}</div>
      </div>
    </>
  );
};
