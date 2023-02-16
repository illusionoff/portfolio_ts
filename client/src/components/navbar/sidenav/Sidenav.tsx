import { FC } from 'react';
import { IntroSpecial } from './components/IntroSpecial';
import { Data } from './data/data';
import { LinkItem } from './components/LinkItem';

interface FixedProps {
  fixed: boolean;
}

export const Sidenav: FC<FixedProps> = ({ fixed }) => {
  return (
    <ul id={fixed ? 'slide-out-left-fixed' : 'slide-out'} className={fixed ? 'sidenav sidenav-fixed' : 'sidenav'}>
      <LinkItem
        data={{
          to: 'Intro',
          color: '',
          text: (
            <>
              {fixed ? <h4>Siniakou Alex</h4> : <center>Siniakou Alex</center>}
              {IntroSpecial}
            </>
          ),
          specialProps: { className: fixed ? 'intro' : 'sidenav-close intro-mobile' },
        }}
        fixed={fixed}
      />
      {Data.map((item) => (
        <LinkItem key={item.to} data={item} fixed={fixed} />
      ))}
    </ul>
  );
};
