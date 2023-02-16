import { Link } from 'react-scroll';
import { IntroLink, IntroLinkFixed } from 'src/components/common/data/links';

export interface ILinkItemProps {
  data: {
    to: string;
    icon?: string;
    text: React.ReactNode;
    color: string;
    specialProps?: Record<string, unknown>;
  };
  fixed: boolean;
}

export const LinkItem = ({ data, fixed }: ILinkItemProps) => {
  const { to, icon, text, color, specialProps } = data;
  return (
    <li>
      <Link to={to} {...(fixed ? IntroLinkFixed : IntroLink)} {...specialProps}>
        {icon && <i className={`fas fa-${icon} fa-fw fa-2x ${color}`}></i>}
        {text}
      </Link>
    </li>
  );
};
