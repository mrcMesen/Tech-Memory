import { ReactNode, ReactElement } from 'react';
import './styles.css';

interface Props {
  children: ReactNode;
  className: string;
}

export const Paper = ({ children, className }: Props): ReactElement => {
  return <div className={`Paper-container ${className}`}>{children}</div>;
};
