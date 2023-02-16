import { FC } from 'react';
import { CardContent } from '../common/components/CardContent';
import { BackgroundData } from '../common/data/cardContentData';

export const Background: FC = () => {
  return (
    <div>
      <h3 className='page-title white-text'>Background</h3>
      <div className='container'>
        <div className='row'>
          {BackgroundData.map((skill, index) => (
            <CardContent details={skill} key={index} />
          ))}
        </div>
      </div>
    </div>
  );
};
