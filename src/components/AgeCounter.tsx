import React from 'react';
import { AgeProvider, useAge } from './AgeContext';

const AgeCounter: React.FC = () => {
  return (
    <AgeProvider>
      <AgeDisplay />
    </AgeProvider>
  );
};

const AgeDisplay: React.FC = () => {
  const { state, dispatch } = useAge();

  return (
    <div>
      <p>Age: {state.age}</p>
      <button onClick={() => dispatch({ type: 'DECREMENT' })}>-1</button>
      <button onClick={() => dispatch({ type: 'INCREMENT' })}>+1</button>
      <button onClick={() => dispatch({ type: 'RESET' })}>Reset</button>
    </div>
  );
};

export default AgeCounter;