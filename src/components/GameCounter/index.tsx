import { ReactElement, useEffect, useState } from 'react';
import { useMemory } from '../../state/Memory';
import { devEnv } from '../../utils/basics';
import { getBestRecord } from '../../utils/BestRecord';
import { calculateTime } from '../../utils/time';

import './styles.css';

export const GameCounter = (): ReactElement => {
  const { state } = useMemory();
  const [time, setTime] = useState<string>('00:00:00');
  const [record, setRecord] = useState<string>('00:00:00');

  useEffect(() => {
    try {
      let componentIsStillMounth = true;
      const counter = setInterval(() => {
        if (state?.startedGameAt) {
          const now = new Date();
          componentIsStillMounth &&
            setTime(calculateTime(state.startedGameAt, now).duration);
        }
      }, 1000);

      if (state?.startedGameAt && state?.finishedGameAt) {
        clearInterval(counter);
        setTime(
          calculateTime(state?.startedGameAt, state?.finishedGameAt).duration
        );
      }

      const getRecord = async () => {
        const best = await getBestRecord();
        componentIsStillMounth && setRecord(best);
      };
      getRecord();

      return () => {
        clearInterval(counter);
        componentIsStillMounth = false;
      };
    } catch (error) {
      if (devEnv()) {
        console.error(error);
      }
    }
  }, [state?.startedGameAt, state?.finishedGameAt]);

  return (
    <div className='Game-counter-container'>
      <span className='Game-counter'>{time}</span>
      <span className='Game-record'>Record: {record}</span>
    </div>
  );
};
