import { memo } from "react";
import Button from "./Button";

function CheckUseCallback({ decrementCount, incrementCount }) {
  console.log("re-render");

  return (
    <div>
      <Button onclick={incrementCount}>Increment</Button>
      <Button onclick={decrementCount}>Decremen</Button>
    </div>
  );
}

export default memo(CheckUseCallback);
