import { FC } from 'react';
import { CardContentSkills } from './components/CardContent';
import { SkillsData } from './data/skillsData';

export const Skills: FC = () => {
  return (
    <div>
      <h3 className='page-title white-text'>Skills</h3>
      <div className='container'>
        {SkillsData.map((skill, index) => (
          <CardContentSkills skills={skill} key={index} />
        ))}
      </div>
    </div>
  );
};
