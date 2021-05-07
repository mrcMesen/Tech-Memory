import { Tech } from '../../app/types';
import { Paper } from '../Paper';
import './styles.css';

interface Props {
  opened: boolean;
  tech: Tech;
  onClick: () => void;
}

export const MemoryCard = ({ opened, tech, onClick }: Props) => {
  return (
    <div onClick={onClick}>
      <Paper className='MemoryCard' shadow={opened ? 'inside' : 'outside'}>
        <span>{tech.name}</span>
      </Paper>
    </div>
  );
};
