import { ReactElement } from 'react';
import { useMemory, ActionType } from '../../state/Memory';

import { MemoryCard } from '../../components/MemoryCard';
import { GameCounter } from '../../components/GameCounter';
import { StartGameButton } from '../../components/StartGameButton';
import { GameFeedbackBot } from '../../components/GameFeedbackBot';
import './styles.css';

import techsMocks from '../../app/mock-tech.json';
import { Tech } from '../../app/types';

export const Game = (): ReactElement => {
  const { state, dispatch } = useMemory();

  const handleTryShowCard = (tech: Tech) => {
    if (state.cardsShown.length < 2) {
      dispatch({ type: ActionType.SHOW_CARD, payload: tech });
    }
    if (state.cardsShown.length === 1) {
      if (state.cardsShown[0].name === tech.name) {
        dispatch({ type: ActionType.UPDATE_GUESSED_TECHS, payload: tech });
      } else {
        dispatch({ type: ActionType.NOTGUESSED });
      }
      setTimeout(() => {
        dispatch({ type: ActionType.HIDE_CARDS });
      }, 1000);
    }
  };

  return (
    <div className='Game-container'>
      <section className='Game-header'>
        <GameFeedbackBot />
        {state.startedGameAt ? <GameCounter /> : <StartGameButton />}
      </section>
      <section className='Game-cards'>
        {techsMocks.map((tech, index) => (
          <MemoryCard
            key={index}
            opened={
              state.cardsShown.includes(tech) ||
              state.guessedTech.includes(tech)
            }
            onClick={() => handleTryShowCard(tech)}
            tech={tech}
          />
        ))}
      </section>
    </div>
  );
};
