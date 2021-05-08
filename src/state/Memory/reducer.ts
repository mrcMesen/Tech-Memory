import { ActionType, State } from './types';
import { Action } from './actions';

export const Reducer = (state: State, action: Action): State => {
  switch (action.type) {
    case ActionType.START_GAME:
      return { ...state, startedGameAt: new Date() };
    case ActionType.FINISH_GAME:
      return { ...state, finishedGameAt: new Date() };
    case ActionType.SHOW_CARD:
      return {
        ...state,
        startedGameAt: state.startedGameAt ? state.startedGameAt : new Date(),
        cardsShown: [...state.cardsShown, action.payload],
      };
    case ActionType.HIDE_CARDS:
      return {
        ...state,
        cardsShown: [],
      };
    case ActionType.NOTGUESSED:
      return { ...state, notGuessed: state.notGuessed + 1, guessed: 0 };
    case ActionType.UPDATE_GUESSED_TECHS:
      return {
        ...state,
        guessed: state.guessed + 1,
        notGuessed: 0,
        guessedTech: [...state.guessedTech, action.payload],
      };
    case ActionType.RESET_GAME:
      return {
        cardsShown: [],
        guessedTech: [],
        startedGameAt: undefined,
        finishedGameAt: undefined,
        guessed: 0,
        notGuessed: 0,
      };
    default:
      return state;
  }
};
