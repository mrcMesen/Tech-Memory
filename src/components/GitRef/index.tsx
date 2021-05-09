import { ReactElement } from 'react';
import { GitIcon } from '../icons/GitIcon';
import { Paper } from '../Paper';
import './styles.css';

export const GitSource = (): ReactElement => {
  return (
    <a
      href='https://github.com/mrcMesen/Tech-Memory'
      target='_blank'
      rel='noopener noreferrer'
    >
      <Paper className='GitIcon'>
        Source
        <GitIcon />
      </Paper>
    </a>
  );
};
