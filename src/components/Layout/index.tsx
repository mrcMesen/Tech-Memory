import { ReactElement, ReactNode } from 'react';
import Navigation from '../Navigation';
import { Paper } from '../Paper';
import { Navbar } from './Navbar';
import './styles.css';

interface Props {
  children: ReactNode;
}

export const Layout = ({ children }: Props): ReactElement => {
  return (
    <div className='App-container'>
      <Navbar />
      <Paper className='Title-content'>
        <h1 className='Title-text'>Memory Game</h1>
        <p className='Title-description'>Play memory with my favorite techs.</p>
        <Navigation />
      </Paper>
      <main className='App-content'>{children}</main>
    </div>
  );
};
