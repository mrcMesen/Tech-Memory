import { useEffect, useState, ReactElement } from 'react';
import { useMemory } from '../../state/Memory';
import { GameBoth } from '../../app/types';

import neutralBot from '../../assets/bot.png';
import happyBot from '../../assets/bot-happy.png';
import sadBot from '../../assets/bot-sad.png';

import { Paper } from '../Paper';
import './styles.css';

const GuessedMessages = [
  {
    title: 'Yeeaaa!',
    message: 'Bien hecho! Haz encontrado una pareja',
  },
  { title: 'Extraordinario!', message: 'Sigue así! Podrás lograrlo!' },
];
const NotGuessedMessages = [
  {
    title: 'Ohhh no!',
    message: 'Intenta recordarlas para más adelante.',
  },
  { title: 'Que mal!', message: 'No te desanimes, la estamos pasando bien!' },
];

export const GameFeedbackBot = (): ReactElement => {
  const [botState, setBotState] = useState<GameBoth>({
    title: "Let's play Memory",
    message: 'The game consists of finding the pairs of each image',
  });
  const { state } = useMemory();

  const getBotState = () => {
    if (botState?.state) {
      if (botState.state === 'happy') {
        return happyBot;
      }
      return sadBot;
    }
    return neutralBot;
  };

  useEffect(() => {
    if (state.guessed) {
      setBotState({
        ...(GuessedMessages[state.guessed - 1] || GuessedMessages[1]),
        state: 'happy',
      });
    }
    if (state.notGuessed) {
      setBotState({
        ...(NotGuessedMessages[state.notGuessed - 1] || NotGuessedMessages[1]),
        state: 'sad',
      });
    }
  }, [state.guessed, state.notGuessed]);

  return (
    <div className='flex-full-center'>
      <img
        src={getBotState()}
        alt='Bot Game Chat'
        className='Game-Chat-botImg'
      />
      <Paper className='Game-Chat'>
        <h2>{botState.title}</h2>
        <p>{botState.message}</p>
      </Paper>
    </div>
  );
};
