import { useCallback, useReducer } from "react";
import CheckUseCallback from "./component/checkUseCallback";
import Couter from "./component/Couter";
import Memo from "./component/Memo";

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
  }, []);
  const decrementCount = useCallback(() => {
    dispatch({ type: DECREMENT, payload: 1 });
  }, []);
  return (
    <>
      <Memo />
      <Couter count={state.count} />
      <CheckUseCallback
        incrementCount={incrementCount}
        decrementCount={decrementCount}
      />
      <hr />
    </>
  );
}

export default App;
