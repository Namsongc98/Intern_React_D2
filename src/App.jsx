import { useCallback, useReducer } from "react";
import CheckUseCallback from "./component/checkUseCallback";

function App() {
  const INCREMENT = "INCREMENT";
  const DECREMENT = "DECREMENT";

  const initialValue = { count: 0 };
  const [state, dispatch] = useReducer(reducer, initialValue);

  function reducer(state, action) {
    switch (action.type) {
      case INCREMENT:
        return { count: state.count + action.payload };
      case DECREMENT:
        return { count: state.count - action.payload };

      default:
        return state;
    }
  }
  const incrementCount = useCallback(() => {
    dispatch({ type: INCREMENT, payload: 1 });
  }, [state.count]);
  const decrementCount = useCallback(() => {
    dispatch({ type: DECREMENT, payload: 1 });
  }, [state.count]);
  return (
    <>
      <p>Count: {state.count}</p>
      <CheckUseCallback incrementCount={incrementCount}  decrementCount={decrementCount} state={state} />
      <hr />
    </>
  );
}

export default App;
