/* eslint-disable react/prop-types */

import { memo } from "react";





function Button({ onclick,children }) {
  

  return (
    <>
      <button onClick={onclick}>{children}</button>
    </>
  );
}
export default  memo(Button);
