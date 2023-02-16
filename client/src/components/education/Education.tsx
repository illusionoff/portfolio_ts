import { FC } from 'react';
import { CardContent } from '../common/components/CardContent';
import { EducationData } from '../common/data/cardContentData';

export const Education: FC = () => {
  return (
    <div>
      <h3 className='page-title white-text'>Education</h3>
      <div className='container'>
        <div className='row'>
          {EducationData.map((skill, index) => (
            <CardContent details={skill} key={index} />
          ))}
        </div>
      </div>
    </div>
  );
};
