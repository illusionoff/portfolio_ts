import { FC } from 'react';
import { useEffect } from 'react';
import M from 'materialize-css/dist/js/materialize.min.js';
import { Sidenav } from './sidenav/Sidenav';

export const Navbar: FC = () => {
  useEffect(() => {
    // M.AutoInit();
    const elems = document.querySelectorAll('.sidenav');
    // eslint-disable-next-line no-unused-vars
    M.Sidenav.init(elems);
  }, []);

  return (
    <>
      <div className='navbar-fixed'>
        <nav>
          <div className='nav-wrapper cyan darken-1'>
            {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
            <a href='#' className='brand-logo'>
              Siniakou Alex
            </a>
            {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
            <a href='#' data-target='slide-out' className='sidenav-trigger'>
              <i className='material-icons'>menu</i>
            </a>
          </div>
        </nav>
      </div>
      <Sidenav fixed={false} />
      <Sidenav fixed={true} />
    </>
  );
};
