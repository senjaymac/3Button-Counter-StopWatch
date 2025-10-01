import React, { createContext, useContext, useReducer, ReactNode } from 'react';

interface AgeState {
  age: number;
}

type AgeAction = 
  | { type: 'INCREMENT' }
  | { type: 'DECREMENT' }
  | { type: 'RESET' };

const ageReducer = (state: AgeState, action: AgeAction): AgeState => {
  switch (action.type) {
    case 'INCREMENT':
      return { age: state.age + 1 };
    case 'DECREMENT':
      return { age: Math.max(0, state.age - 1) };
    case 'RESET':
      return { age: 0 };
    default:
      return state;
  }
};

interface AgeContextType {
  state: AgeState;
  dispatch: React.Dispatch<AgeAction>;
}

const AgeContext = createContext<AgeContextType | undefined>(undefined);

export const AgeProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [state, dispatch] = useReducer(ageReducer, { age: 0 });

  return (
    <AgeContext.Provider value={{ state, dispatch }}>
      {children}
    </AgeContext.Provider>
  );
};

export const useAge = () => {
  const context = useContext(AgeContext);
  if (!context) {
    throw new Error('useAge must be used within AgeProvider');
  }
  return context;
};