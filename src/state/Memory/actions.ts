import { Tech } from '../../app/types';
import { ActionType } from './types';

export type Action =
  | { type: ActionType.START_GAME }
  | { type: ActionType.FINISH_GAME }
  | { type: ActionType.SHOW_CARD; payload: Tech }
  | { type: ActionType.HIDE_CARDS }
  | {
      type: ActionType.UPDATE_GUESSED_TECHS;
      payload: Tech;
    };
