import { ReactElement, ReactNode, ButtonHTMLAttributes } from 'react';
import { Paper } from '../Paper';
import './styles.css';

interface Props extends ButtonHTMLAttributes<HTMLButtonElement> {
  className?: string;
  children: ReactNode;
}

export const Button = ({
  className,
  type = 'button',
  onClick,
  children,
}: Props): ReactElement => {
  return (
    <button type={type} onClick={onClick} className='button-container'>
      <Paper className={`button flex-full-center ${className}`}>
        {children}
      </Paper>
    </button>
  );
};
