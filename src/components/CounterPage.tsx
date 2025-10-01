import { useReducer, useEffect } from 'react';
import { counterReducer, initialState } from '../reducer/counterReducer';

const CounterPage = () => {
  const [state, dispatch] = useReducer(counterReducer, initialState);

  useEffect(() => {
    console.log(`Count changed: ${state.count}`);
  }, [state.count]);

  return (
    <div>
      <p>Count Value: {state.count}</p>
      <button onClick={() => dispatch({ type: 'DECREMENT' })}>-1</button>
      <button onClick={() => dispatch({ type: 'INCREMENT' })}>+1</button>
      <button onClick={() => dispatch({ type: 'RESET' })}>Reset</button>
    </div>
  );
};

export default CounterPage;
