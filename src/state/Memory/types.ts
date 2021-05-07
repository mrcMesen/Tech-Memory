import { Tech } from '../../app/types';
import { Action } from './actions';

export enum ActionType {
  SHOW_CARD = 'SHOW_CARD',
  HIDE_CARD = 'HIDE_CARD',
  UPDATE_GUESSED_TECHS = 'UPDATE_GUESSED_TECHS',
}

export type Dispatch = (action: Action) => void;

export interface State {
  GuessedTech: Tech[];
  CardsShown: number[];
}
