import { useState, useMemo, ReactElement } from 'react';
import { ReactEventHandler, ChangeEventHandler } from 'react';
import { useHistory } from 'react-router-dom';

import Firestore from '../../services/firestore';
import { ActionType, useMemory } from '../../state/Memory';
import { HistoryRecord } from '../../app/types';
import { calculateTime } from '../../utils/time';
import { Button } from '../Button';

import './styles.css';
import { Spinner } from '../Spinner';

interface Props {
  reset: () => void;
}

export const WinnerModal = ({ reset }: Props): ReactElement => {
  const { state, dispatch } = useMemory();
  const [loading, setLoading] = useState<boolean>(false);
  const [nickName, setnickName] = useState<string>('');
  const router = useHistory();

  const time = useMemo(() => {
    if (state?.startedGameAt && state?.finishedGameAt) {
      return calculateTime(state.startedGameAt, state.finishedGameAt);
    }
  }, [state.startedGameAt, state.finishedGameAt]);

  const handleClose = () => {
    reset();
    dispatch({ type: ActionType.RESET_GAME });
  };

  const handleSaveRecord: ReactEventHandler<HTMLFormElement> = async event => {
    event.preventDefault();
    if (state?.finishedGameAt && time) {
      setLoading(true);
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
        <p>Tu duraci??n fu??: {time?.duration}</p>
        <p>
          Puedes guardar tu record y ver en que posici??n estas entre todos los
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
            maxLength={14}
            required
          />
          <span className='WinnerModal-help-input'>14 characters max</span>
          <Button
            type='submit'
            className='WinnerModal-button'
            disabled={loading}
          >
            {loading && <Spinner />}
            Save
          </Button>
          <button
            onClick={handleClose}
            className='WinnerModal-close-button'
            disabled={loading}
          >
            &#10006; Cerrar
          </button>
        </form>
      </div>
    </div>
  );
};
