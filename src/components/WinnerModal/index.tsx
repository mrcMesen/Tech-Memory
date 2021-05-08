import { useState, useMemo, ReactElement } from 'react';
import { ReactEventHandler, ChangeEventHandler } from 'react';
import { useHistory } from 'react-router-dom';

import Firestore from '../../services/firestore';
import { ActionType, useMemory } from '../../state/Memory';
import { HistoryRecord } from '../../app/types';
import { calculateTime } from '../../utils/time';
import { Button } from '../Button';

import './styles.css';

export const WinnerModal = (): ReactElement => {
  const { state, dispatch } = useMemory();
  const [nickName, setnickName] = useState<string>('');
  const router = useHistory();

  const time = useMemo(() => {
    if (state?.startedGameAt && state?.finishedGameAt) {
      return calculateTime(state.startedGameAt, state.finishedGameAt);
    }
  }, [state.startedGameAt, state.finishedGameAt]);

  const handleClose = () => {
    dispatch({ type: ActionType.RESET_GAME });
  };

  const handleSaveRecord: ReactEventHandler<HTMLFormElement> = async event => {
    event.preventDefault();
    if (state?.finishedGameAt && time) {
      const objFirestore = new Firestore<HistoryRecord>('records');
      const date = state.finishedGameAt;
      const newRecord = {
        date: date.toLocaleDateString('en-US'),
        name: nickName,
        duration: time.duration,
        fullDuration: time.fullDuration,
      };
      await objFirestore.create(newRecord);
      handleClose();
      router.push('/records');
    }
  };

  const handleChangeNickName: ChangeEventHandler<HTMLInputElement> = e => {
    setnickName(e.target.value);
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
        <p>Tu duración fué: {time?.duration}</p>
        <p>
          Puedes guardar tu record y ver en que posición estas entre todos los
          que han participado.
        </p>
        <form
          className='WinnerModal-input-container'
          onSubmit={handleSaveRecord}
        >
          <label htmlFor='input-record'>NickName</label>
          <input
            onChange={handleChangeNickName}
            className='WinnerModal-input'
            type='text'
            id='input-record'
          />
          <Button type='submit' className='WinnerModal-button'>
            Save
          </Button>
          <button onClick={handleClose} className='WinnerModal-close-button'>
            &#10006; Cerrar
          </button>
        </form>
      </div>
    </div>
  );
};
