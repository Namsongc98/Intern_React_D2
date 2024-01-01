import { useCallback } from "react";
import { useDispatch } from "react-redux";
import { actionAddTodo } from "../store/action/action";
function useButtom(type, dispatch) {
  const handleDispatch = useCallback(() => {
    dispatch({ type, payload: 1 });
  }, []);

  const dispatchRedux = useDispatch();
  const handleDispatchRedux = function ( payload) {
    dispatchRedux(actionAddTodo( payload));
  };
  return {
    handleDispatch,
    handleDispatchRedux,
  };
}

export default useButtom;
