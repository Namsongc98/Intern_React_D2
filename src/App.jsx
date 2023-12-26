import { useCallback, useReducer } from "react";
import CheckUseCallback from "./component/checkUseCallback";
import Counter from "./component/Counter";
import Memo from "./component/Memo";
import UseMemoDemo from "./component/UseMemoDemo";
import useButtom from "./hook/useButtom";

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

  const incrementCount = useButtom(INCREMENT,dispatch)
  const decrementCount = useButtom(DECREMENT,dispatch);

  return (
    <>
      <Memo />
      <Counter count={state.count} />
      <CheckUseCallback
        incrementCount={incrementCount.handleDispatch}
        decrementCount={decrementCount.handleDispatch}
      />
      <hr />
      <UseMemoDemo />
    </>
  );
}

export default App;
