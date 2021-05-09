import { ReactElement } from 'react';
import { GitSource } from '../GitRef';
import { GitIcon } from '../icons/GitIcon';
import { LinkedInIcon } from '../icons/LinkedInIcon';
import { TwitterIcon } from '../icons/TwitterIcon';
import './styles.css';

export const Navbar = (): ReactElement => {
  return (
    <div className='Navbar'>
      <nav className='Navbar-MMC'>
        <span className='Navbar-name'>Marco Mesen |</span>
        <div className='flex-full-center Navbar-icons'>
          <a
            className='flex-full-center'
            href='https://github.com/mrcMesen'
            target='_blank'
            rel='noopener noreferrer'
          >
            <GitIcon />
          </a>
          <a
            className='flex-full-center'
            href='https://twitter.com/mrcMesen'
            target='_blank'
            rel='noopener noreferrer'
          >
            <TwitterIcon />
          </a>
          <a
            className='flex-full-center'
            href='https://www.linkedin.com/in/marco-mesen/'
            target='_blank'
            rel='noopener noreferrer'
          >
            <LinkedInIcon />
          </a>
        </div>
        <a
          className='Navbar-mail'
          href='mailto:marco.mesenc@hotmail.com'
          target='_blank'
          rel='noopener noreferrer'
        >
          marco.mesenc@hotmail.com
        </a>
      </nav>
      <GitSource />
    </div>
  );
};
