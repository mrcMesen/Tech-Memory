import { Tech } from '../../app/types';
import { ActionType } from './types';

export type Action =
  | { type: ActionType.SHOW_CARD; payload: number }
  | { type: ActionType.HIDE_CARD; payload: number }
  | {
      type: ActionType.UPDATE_GUESSED_TECHS;
      payload: Tech;
    };
