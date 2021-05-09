import { ReactElement } from 'react';
import './styles.css';

export const Loader = (): ReactElement => {
  return (
    <div className='Loader'>
      {/* <p>Loading</p> */}
      <div className='Loader-grid'>
        <div />
        <div />
        <div />
        <div />
        <div />
        <div />
        <div />
        <div />
        <div />
      </div>
    </div>
  );
};
