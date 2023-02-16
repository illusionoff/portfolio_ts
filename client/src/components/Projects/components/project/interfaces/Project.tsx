export interface IDescription {
  title: string;
  titleDetailed: string;
  titleUrl: string;
  imgSrc: string;
  imgAlt: string;
  href: string;
  role: string;
  interval: string;
  text: string;
}

export interface IImages {
  grid: string;
  imgSrc: string;
  imgAlt: string;
}

export interface IMainFunctions {
  functions: string[];
  // Дополнительная ссылка, если требуется. Где id это id в массиве functions к которой ссылку прикрепить
  link?: {
    url: string;
    text: string;
    id: number;
  };
}

export interface IAdditionalTechnology {
  technology: string;
  text: string;
}

export interface ILink {
  url: string;
  text: string;
}

interface ILinkCommon {
  grid: string;
  aHref: string;
  aDataTooltip: string;
  aclassName: string;
  gridText: string;
  text: string;
  className: string;
}

export interface ILinkImg extends ILinkCommon {
  img: {
    alt: string;
    src: string;
    width: string;
    height: string;
  };
}

export interface ILinkPictogramm extends ILinkCommon {
  a: {
    iClassName: string;
  };
}

export type ProjectLinkOptionType = ILinkImg | ILinkPictogramm;

export interface IProject {
  description: IDescription;
  images?: IImages[];
  mainFunctions: IMainFunctions;
  mainTechnologies: string[];
  additionalTechnologies?: IAdditionalTechnology[];
  links?: ProjectLinkOptionType[];
}
