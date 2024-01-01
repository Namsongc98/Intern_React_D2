import { useContext, useState } from "react";
import { MyProvide } from "../store/MyContext";
import Button from "./Button";

function HelloContext() {
    const activeContext = useContext(MyProvide);
    const [toggle, setToggle]= useState(activeContext)
  const handleClick = function () {
   setToggle(!toggle);
 

  };
  return (
    <>
      <Button onclick={handleClick}> active</Button>
      {toggle ? (
        <div>
          <p>Hello context</p>
        </div>
      ) : (
        <></>
      )}
    </>
  );
}

export default HelloContext;
