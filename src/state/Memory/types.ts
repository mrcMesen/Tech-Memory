import { Tech } from '../../app/types';
import { Action } from './actions';

export enum ActionType {
  START_GAME = 'START_GAME',
  FINISH_GAME = 'FINISH_GAME',
  SHOW_CARD = 'SHOW_CARD',
  HIDE_CARDS = 'HIDE_CARDS',
  UPDATE_GUESSED_TECHS = 'UPDATE_GUESSED_TECHS',
  NOTGUESSED = 'NOTGUESSED',
  RESET_GAME = 'RESET_GAME',
}

export type Dispatch = (action: Action) => void;

export interface State {
  startedGameAt?: Date;
  finishedGameAt?: Date;
  guessedTech: Tech[];
  cardsShown: Tech[];
  guessed: number;
  notGuessed: number;
}
