import { ReactElement, ReactNode, ButtonHTMLAttributes } from 'react';
import { Paper } from '../Paper';
import { useMemory, ActionType } from '../../state/Memory';
import './styles.css';

interface Props extends ButtonHTMLAttributes<HTMLButtonElement> {
  className?: string;
  children: ReactNode;
}

export const Button = ({
  className,
  type = 'button',
  children,
}: Props): ReactElement => {
  const { dispatch } = useMemory();
  return (
    <button
      type={type}
      onClick={() => dispatch({ type: ActionType.START_GAME })}
      className='button-container'
    >
      <Paper className={`button flex-full-center ${className}`}>
        {children}
      </Paper>
    </button>
  );
};
