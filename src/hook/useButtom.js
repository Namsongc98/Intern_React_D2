import { useCallback } from "react";

function useButtom(type,dispatch) {
 const handleDispatch = useCallback(() => {
    dispatch({ type, payload: 1 });
  }, []);
  return {
    handleDispatch
  }
}

export default useButtom;
