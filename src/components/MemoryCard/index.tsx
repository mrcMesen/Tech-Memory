import { useState, useEffect } from 'react';
import { Tech } from '../../app/types';
import Storage from '../../services/storage';
import { Paper } from '../Paper';
import './styles.css';

interface Props {
  opened: boolean;
  tech: Tech;
  onClick: () => void;
  disabled?: boolean;
}

export const MemoryCard = ({ opened, tech, disabled, onClick }: Props) => {
  const [image, setImage] = useState<string>();

  useEffect(() => {
    let componentIsStillMounth = true;
    const getImage = async () => {
      const storage = new Storage();
      const requestImage = await storage.read('techs', tech.image);
      if (componentIsStillMounth && requestImage) {
        setImage(requestImage);
      }
    };
    getImage();
    return () => {
      componentIsStillMounth = false;
    };
  }, [tech.image]);

  return (
    <button onClick={onClick} disabled={opened || disabled}>
      <Paper
        className='MemoryCard flex-full-center overflow-hidden'
        shadow={opened ? 'inside' : 'outside'}
      >
        <div className='MemoryCard-inside'>
          {image ? (
            <img
              className='MemoryCard-image'
              src={image}
              alt={`${tech.name} - Logo`}
            />
          ) : null}
          <span className='MemoryCard-tech'>{tech.name}</span>
        </div>
        <div
          className={`MemoryCard-cap ${
            opened
              ? 'MemoryCard-cap-opened'
              : 'MemoryCard-cap-hidden flex-full-center'
          }`}
        >
          ?
        </div>
      </Paper>
    </button>
  );
};
