import { FC } from 'react';
import { v4 as uuidv4 } from 'uuid';
import { IProject, ProjectLinkOptionType } from '../interfaces/Project';

interface LinksProps {
  links: IProject['links'];
}

const renderLink = (link: ProjectLinkOptionType) => {
  const { grid, aHref, aDataTooltip, aclassName, gridText, text } = link;
  return (
    <div className='row' key={uuidv4()}>
      <div className={grid}>
        <a href={aHref} target='_blanc' data-position='top' data-tooltip={aDataTooltip} className={aclassName}>
          {'img' in link ? (
            <img
              alt={link.img.alt}
              src={link.img.src}
              className='responsive-img center-block'
              width={link.img.width}
              height={link.img.height}
            />
          ) : (
            <i className={link.a.iClassName} />
          )}
        </a>
      </div>
      <div className={gridText}>
        <a href={aHref} target='_blanc'>
          {text}
        </a>
      </div>
    </div>
  );
};

export const Links: FC<LinksProps> = ({ links }) => {
  return (
    <>
      <h6 className='linksName'>Ссылки на проект</h6>
      {links && links.map((link) => renderLink(link))}
    </>
  );
};
