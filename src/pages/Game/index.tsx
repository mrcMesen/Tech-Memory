import { useState, ReactElement } from 'react';
import { useMemory } from '../../state/Memory';

import { MemoryCard } from '../../components/MemoryCard';
import { GameCounter } from '../../components/GameCounter';
import { StartGameButton } from '../../components/StartGameButton';
import './styles.css';

import techsMocks from '../../app/mock-tech.json';

export const Game = (): ReactElement => {
  const [open, setOpen] = useState(false);
  const { state } = useMemory();

  return (
    <div className='Game-container'>
      <section className='Game-header'>
        <div>
          <h2>Let's play Memory</h2>
          <p>
            The game consists of finding the pairs of each image, each image
            corresponds to one of my favorite techs.
          </p>
        </div>
        {state.startedGameAt ? <GameCounter /> : <StartGameButton />}
      </section>
      <section className='Game-cards'>
        {techsMocks.map(tech => (
          <>
            <MemoryCard
              opened={open}
              onClick={() => setOpen(prev => !prev)}
              tech={tech}
            />
            <MemoryCard
              opened={open}
              onClick={() => setOpen(prev => !prev)}
              tech={tech}
            />
          </>
        ))}
      </section>
    </div>
  );
};
