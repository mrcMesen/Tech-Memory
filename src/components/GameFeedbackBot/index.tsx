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
    title: '👏 Yeeaaa!',
    message: 'Bien hecho! Haz encontrado una pareja',
  },
  {
    title: '🎉 Extraordinario!',
    message: 'Sigue así! Podrás lograrlo!',
  },
];
const NotGuessedMessages = [
  {
    title: '😅 Ohhh no!',
    message: 'Intenta recordarlas para más adelante.',
  },
  {
    title: '😓 Que mal!',
    message: 'No te desanimes, la estamos pasando bien!',
  },
];

const initialState = {
  title: "😎 Let's play Memory",
  message: 'The game consists of finding the pairs of each image',
};

export const GameFeedbackBot = (): ReactElement => {
  const [botState, setBotState] = useState<GameBoth>(initialState);
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
    if (!state.startedGameAt) {
      setBotState(initialState);
    }
  }, [state.guessed, state.notGuessed, state.startedGameAt]);

  return (
    <div className='flex-full-center'>
      <img
        src={getBotState()}
        alt='Bot Game Chat'
        className='Game-Chat-botImg'
      />
      <Paper className='Game-Chat'>
        <h2 className='Game-Chat-title'>
          <span>{botState.title}</span>
          {botState?.state && (
            <>
              {botState.state === 'happy' ? (
                <span className='Game-Chat-indicator-happy'>&#10003;</span>
              ) : (
                <span className='Game-Chat-indicator-sad'>&#10006;</span>
              )}
            </>
          )}
        </h2>
        <p>{botState.message}</p>
      </Paper>
    </div>
  );
};
