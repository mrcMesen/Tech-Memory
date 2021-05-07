import { ReactElement } from 'react';
import { Paper } from '../Paper';

import './styles.css';

export const StartGameButton = (): ReactElement => {
  return (
    <button type='button'>
      <Paper className='Game-start-button flex-full-center'>Start Game</Paper>
    </button>
  );
};
