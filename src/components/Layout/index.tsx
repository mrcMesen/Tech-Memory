import { ReactElement, ReactNode } from 'react';
import { Paper } from '../Paper';
import { Footer } from './Footer';
import './styles.css';

interface Props {
  children: ReactNode;
}

export const Layout = ({ children }: Props): ReactElement => {
  return (
    <div className='App-container'>
      <Paper className='Title-content bg-gradiant'>
        <h1 className='Title-text'>Memory Tech Game</h1>
      </Paper>
      <main className='App-content'>{children}</main>
      <Footer />
    </div>
  );
};
