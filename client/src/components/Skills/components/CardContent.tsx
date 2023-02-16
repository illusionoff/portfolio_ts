import { FC } from 'react';
import { ISkills } from '../interfaces/Skills';

interface CardContentProps {
  skills: ISkills;
}

export const CardContentSkills: FC<CardContentProps> = ({ skills: { title, skills } }) => {
  return (
    <>
      <div className='card'>
        <div className='card-content'>
          <h4 className=' grey-text text-darken-2'>{title}</h4>
          <div className='row center-align'>
            {skills.map((skill, index) => (
              <div className={skill.grid} key={index}>
                <img alt='' src={skill.src} className='responsive-img'></img>
                {skill.name}
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};
