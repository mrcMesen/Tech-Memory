import { ReactElement } from 'react';
import { Paper } from '../Paper';
import { useMemory, ActionType } from '../../state/Memory';
import './styles.css';

export const StartGameButton = (): ReactElement => {
  const { dispatch } = useMemory();
  return (
    <button
      type='button'
      onClick={() => dispatch({ type: ActionType.START_GAME })}
    >
      <Paper className='Game-start-button flex-full-center'>Start Game</Paper>
    </button>
  );
};
