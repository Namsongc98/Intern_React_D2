
import Button from "./Button";

function CheckUseCallback({ decrementCount, incrementCount, state }) {
  console.log(state);
  return (
    <div>
      <Button click={incrementCount}>Increment</Button>
      <Button click={decrementCount}>Decremen</Button>
    </div>
  );
}

export default CheckUseCallback;
