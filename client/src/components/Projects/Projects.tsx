import { useEffect, FC } from 'react';
import M from 'materialize-css/dist/js/materialize.min.js';
import { Project } from './components/project/Project';
import { CriptoArbitrData } from './components/project/data/criptoarbitr';
import { LandProData } from './components/project/data/landPro';
import { PortfolioData } from './components/project/data/portfolio';
import { HomeMoneyCalcData } from './components/project/data/homemoneycalc';
export const Projects: FC = () => {
  useEffect(() => {
    const elems = document.querySelectorAll('.tooltipped');
    // eslint-disable-next-line no-unused-vars
    M.Tooltip.init(elems);
  }, []);

  return (
    <>
      <h3 className='page-title white-text'>Experience</h3>
      <div className='container'>
        <Project project={LandProData} />
        <Project project={CriptoArbitrData} />
        <Project project={PortfolioData} />
        <Project project={HomeMoneyCalcData} />
      </div>
    </>
  );
};
