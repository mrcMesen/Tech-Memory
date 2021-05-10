import { useEffect, useState, useMemo, ReactElement } from 'react';
import Confetti from 'react-confetti';

import { useMemory, ActionType } from '../../state/Memory';
import { Tech } from '../../app/types';
import Firestore from '../../services/firestore';

import { MemoryCard } from '../../components/MemoryCard';
import { GameCounter } from '../../components/GameCounter';
import { Button } from '../../components/Button';
import { GameFeedbackBot } from '../../components/GameFeedbackBot';
import { WinnerModal } from '../../components/WinnerModal';
import { Loader } from '../../components/Loader';

import { transformTechs, reorderTechs } from '../../utils/transform-tech';
import './styles.css';

export const Game = (): ReactElement => {
  const { state, dispatch } = useMemory();
  const [techList, setTechList] = useState<Tech[]>([]);

  const techCardsList = useMemo(() => {
    return techList.length > 0 ? transformTechs(techList) : [];
  }, [techList]);

  useEffect(() => {
    let componentIsStillMounth = true;
    const getRecords = async () => {
      const objFirestore = new Firestore<Tech>('techs');
      const apiTechList = await objFirestore.readAll();
      if (componentIsStillMounth && apiTechList) {
        setTechList(apiTechList);
      }
    };
    getRecords();
    return () => {
      componentIsStillMounth = false;
    };
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

  const handleStartGame = () => dispatch({ type: ActionType.START_GAME });
  return (
    <div className='Game-container'>
      {techList.length > 0 && state.guessedTech.length === techList.length && (
        <>
          <Confetti />
          <WinnerModal reset={() => setTechList(reorderTechs(techList))} />
        </>
      )}
      <section className='Game-header'>
        <GameFeedbackBot />
        {state.startedGameAt ? (
          <GameCounter />
        ) : (
          <Button onClick={handleStartGame} className='Game-button'>
            Start Game
          </Button>
        )}
      </section>
      {techCardsList.length > 0 ? (
        <section className='Game-cards'>
          {techCardsList.map((tech, index) => (
            <MemoryCard
              key={index}
              opened={Boolean(
                state.cardsShown.find(
                  findedTech => findedTech.id === tech.id
                ) ||
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
      ) : (
        <Loader />
      )}
    </div>
  );
};
