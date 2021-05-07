import { Tech } from '../../app/types';
import { Action } from './actions';

export enum ActionType {
  START_GAME = 'START_GAME',
  FINISH_GAME = 'FINISH_GAME',
  SHOW_CARD = 'SHOW_CARD',
  HIDE_CARD = 'HIDE_CARD',
  UPDATE_GUESSED_TECHS = 'UPDATE_GUESSED_TECHS',
}

export type Dispatch = (action: Action) => void;

export interface State {
  startedGameAt?: Date;
  finishedGameAt?: Date;
  guessedTech: Tech[];
  cardsShown: number[];
}
