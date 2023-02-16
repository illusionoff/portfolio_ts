import { FC } from 'react';
import { Description } from './components/Description';
import { IProject } from './interfaces/Project';
import { Images } from './components/images/Images';
import { MainFunctions } from './components/MainFunctions';
import { MainTechnologies } from './components/MainTechnologies';
import { AdditionalTechnologies } from './components/AdditionalTechnologies';
import { Links } from './components/Links';

interface ProjectProps {
  project: IProject;
}
export const Project: FC<ProjectProps> = ({
  project: { description, images, mainFunctions, mainTechnologies, additionalTechnologies, links },
}) => {
  return (
    <>
      <div className='card'>
        <div className='card-content'>
          {<Description description={description} />}
          {images ? images.length === 0 ? null : <Images images={images} /> : null}
          {mainFunctions && <MainFunctions mainFunctions={mainFunctions} />}
          {mainTechnologies && <MainTechnologies mainTechnologies={mainTechnologies} />}
          {additionalTechnologies && <AdditionalTechnologies additionalTechnologies={additionalTechnologies} />}
          {links && <Links links={links} />}
        </div>
      </div>
    </>
  );
};
