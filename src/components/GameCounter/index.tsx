import { ReactElement, useEffect, useState } from 'react';
import { useMemory } from '../../state/Memory';
import { calculateTime } from '../../utils/time';

import './styles.css';

export const GameCounter = (): ReactElement => {
  const { state } = useMemory();
  const [time, setTime] = useState<string>('00:00:00');

  useEffect(() => {
    const counter = setInterval(() => {
      if (state?.startedGameAt) {
        const now = new Date();

        setTime(calculateTime(state.startedGameAt, now).duration);
      }
    }, 1000);

    if (state?.startedGameAt && state?.finishedGameAt) {
      clearInterval(counter);
      setTime(
        calculateTime(state?.startedGameAt, state?.finishedGameAt).duration
      );
    }

    return () => {
      clearInterval(counter);
    };
  }, [state?.startedGameAt, state?.finishedGameAt]);

  return (
    <div className='Game-counter-container'>
      <span className='Game-counter'>{time}</span>
      <span className='Game-record'>Record: 00:00:00</span>
    </div>
  );
};
