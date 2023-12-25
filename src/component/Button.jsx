/* eslint-disable react/prop-types */




function Button({ click,children }) {
 

  return (
    <>
      <button onClick={click}>{children}</button>
    </>
  );
}
export default Button;
