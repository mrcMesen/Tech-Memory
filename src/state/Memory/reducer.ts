import { ActionType, State } from './types';
import { Action } from './actions';

export const Reducer = (state: State, action: Action): State => {
  switch (action.type) {
    case ActionType.SHOW_CARD:
      return { ...state, CardsShown: [...state.CardsShown, action.payload] };
    case ActionType.HIDE_CARD:
      return {
        ...state,
        CardsShown: state.CardsShown.filter(item => item !== action.payload),
      };
    case ActionType.UPDATE_GUESSED_TECHS:
      return {
        ...state,
        GuessedTech: [...state.GuessedTech, action.payload],
      };
    default:
      return state;
  }
};
