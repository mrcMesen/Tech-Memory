import { useReducer, createContext, useContext } from 'react';
import { ReactNode, ReactElement } from 'react';

import { Reducer } from './reducer';
import { State, Dispatch } from './types';

const initialState: State = { CardsShown: [], GuessedTech: [] };

interface ContextType {
  state: State;
  dispatch: Dispatch;
}

const MemoryContext = createContext<ContextType | undefined>(undefined);

interface Props {
  children: ReactNode;
}

export const MemoryProvider = ({ children }: Props): ReactElement => {
  const [state, dispatch] = useReducer(Reducer, initialState);

  return (
    <MemoryContext.Provider
      value={{
        state: state,
        dispatch: dispatch,
      }}
    >
      {children}
    </MemoryContext.Provider>
  );
};

export function useMemory(): ContextType {
  const context = useContext(MemoryContext);
  if (context === undefined) {
    throw new Error('useMemory must be used within a MemoryContext Provider');
  }
  return context;
}
