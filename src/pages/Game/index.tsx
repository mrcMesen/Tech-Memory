import { useMemo, ReactElement } from 'react';
import { useMemory, ActionType } from '../../state/Memory';
import Confetti from 'react-confetti';

import { MemoryCard } from '../../components/MemoryCard';
import { GameCounter } from '../../components/GameCounter';
import { StartGameButton } from '../../components/StartGameButton';
import { GameFeedbackBot } from '../../components/GameFeedbackBot';
import './styles.css';

import techList from '../../app/mock-tech.json';
import { Tech } from '../../app/types';
import { transformTechs } from '../../utils/transform-tech';

export const Game = (): ReactElement => {
  const { state, dispatch } = useMemory();

  const techCardsList = useMemo(() => {
    return transformTechs(techList);
  }, []);

  const handleTryShowCard = (tech: Tech) => {
    dispatch({ type: ActionType.SHOW_CARD, payload: tech });
    if (state.cardsShown.length === 1) {
      if (state.cardsShown[0].name === tech.name) {
        dispatch({ type: ActionType.UPDATE_GUESSED_TECHS, payload: tech });
        if (state.guessedTech.length + 1 === techList.length) {
          dispatch({ type: ActionType.FINISH_GAME });
        }
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
      {state.guessedTech.length === techList.length && <Confetti />}
      <section className='Game-header'>
        <GameFeedbackBot />
        {state.startedGameAt ? <GameCounter /> : <StartGameButton />}
      </section>
      <section className='Game-cards'>
        {techCardsList.map((tech, index) => (
          <MemoryCard
            key={index}
            opened={Boolean(
              state.cardsShown.find(findedTech => findedTech.id === tech.id) ||
                state.guessedTech.find(
                  findedTech => findedTech.name === tech.name
                )
            )}
            onClick={() => handleTryShowCard(tech)}
            tech={tech}
            disabled={state.cardsShown.length === 2}
          />
        ))}
      </section>
    </div>
  );
};
