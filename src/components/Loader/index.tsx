import { ReactElement } from 'react';
import './styles.css';

export default function Loader(): ReactElement {
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
}
