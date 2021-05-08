import { ReactElement } from 'react';
import { useMemory } from '../../state/Memory';
import { calculateTime } from '../../utils/time';
import { Button } from '../Button';

import './styles.css';

export const WinnerModal = (): ReactElement => {
  const { state } = useMemory();

  const handleSaveRecord = () => {
    //
  };

  if (!state.startedGameAt || !state.finishedGameAt) {
    return <></>;
  }

  return (
    <div className='WinnerModal-overlay flex-full-center'>
      <div className='WinnerModal-content'>
        <h3 className='WinnerModal-title'>
          Felicidades por completar el juego
        </h3>
        <p>
          Tu duración fué:{' '}
          {calculateTime(state.startedGameAt, state.finishedGameAt)}
        </p>
        <p>
          Puedes guardar tu record y ver en que posición estas entre todos los
          que han participado.
        </p>
        <form
          className='WinnerModal-input-container'
          onSubmit={handleSaveRecord}
        >
          <label htmlFor='input-record'>NickName</label>
          <input className='WinnerModal-input' type='text' id='input-record' />
          <Button type='submit' className='WinnerModal-button'>
            Save
          </Button>
        </form>
      </div>
    </div>
  );
};
