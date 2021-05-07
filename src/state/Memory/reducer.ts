import { ActionType, State } from './types';
import { Action } from './actions';

export const Reducer = (state: State, action: Action): State => {
  switch (action.type) {
    case ActionType.START_GAME:
      return { ...state, startedGameAt: new Date() };
    case ActionType.FINISH_GAME:
      return { ...state, finishedGameAt: new Date() };
    case ActionType.SHOW_CARD:
      return { ...state, cardsShown: [...state.cardsShown, action.payload] };
    case ActionType.HIDE_CARD:
      return {
        ...state,
        cardsShown: state.cardsShown.filter(item => item !== action.payload),
      };
    case ActionType.UPDATE_GUESSED_TECHS:
      return {
        ...state,
        guessedTech: [...state.guessedTech, action.payload],
      };
    default:
      return state;
  }
};
