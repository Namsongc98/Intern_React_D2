import { useState } from "react";

function useInput(initValue = "") {
  const [value, setValue] = useState(initValue);

  function handleChage(e) {
    setValue(e.target.value);
  }
  return {
    value,
    onChange: handleChage,
  };
}

export default useInput;
