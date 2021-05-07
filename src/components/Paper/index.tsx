import { ReactNode, ReactElement } from 'react';
import './styles.css';

interface Props {
  children: ReactNode;
  shadow?: 'outside' | 'inside';
  className?: string;
}

export const Paper = ({
  children,
  shadow = 'outside',
  className,
}: Props): ReactElement => {
  return (
    <div
      className={`Paper-container ${
        shadow === 'inside' ? 'Paper-insideShadow' : 'Paper-outsideShadow'
      } ${className}`}
    >
      {children}
    </div>
  );
};
