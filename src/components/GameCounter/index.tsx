import { ReactElement, useEffect, useState } from 'react';
import { useMemory } from '../../state/Memory';

import './styles.css';

export const GameCounter = (): ReactElement => {
  const { state } = useMemory();
  const [time, setTime] = useState<string>('00:00:00');

  useEffect(() => {
    const counter = setInterval(() => {
      if (state?.startedGameAt) {
        const now = new Date();
        let difTime = now.getTime() - state.startedGameAt.getTime();
        difTime /= 1000;

        const seconds = ('0' + Math.floor(difTime % 60)).slice(-2);
        const minuts = ('0' + Math.floor((difTime / 60) % 60)).slice(-2);
        const hours = ('0' + Math.floor((difTime / 3600) % 24)).slice(-2);

        setTime(`${hours}:${minuts}:${seconds}`);
      }
    }, 1000);
    return () => {
      clearInterval(counter);
    };
  });

  return (
    <div className='Game-counter-container'>
      <span className='Game-counter'>{time}</span>
      <span className='Game-record'>Record: 00:00:00</span>
    </div>
  );
};
