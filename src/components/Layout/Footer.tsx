import { ReactElement } from 'react';
import './styles.css';

export const Footer = (): ReactElement => {
  return (
    <footer className='Footer bg-gradiant'>
      <div className='Footer-presentation'>
        <h2>Marco Mesen</h2>
        <h4>Software Engineer</h4>
      </div>
      <div>{/* <Social /> */}</div>
    </footer>
  );
};
