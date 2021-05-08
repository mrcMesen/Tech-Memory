import { Tech } from '../../app/types';
import { Paper } from '../Paper';
import './styles.css';

interface Props {
  opened: boolean;
  tech: Tech;
  onClick: () => void;
  disabled?: boolean;
}

export const MemoryCard = ({ opened, tech, disabled, onClick }: Props) => {
  return (
    <button onClick={onClick} disabled={opened || disabled}>
      <Paper
        className='MemoryCard flex-full-center overflow-hidden'
        shadow={opened ? 'inside' : 'outside'}
      >
        <div>
          <span className='MemoryCard-tech'>{tech.name}</span>
          {tech.uri ? <img src='' alt='' /> : null}
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
