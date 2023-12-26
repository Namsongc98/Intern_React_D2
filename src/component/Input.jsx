import { forwardRef, useImperativeHandle, useRef } from "react";

const Input = forwardRef(function Input({ value, onChange }, ref) {
  const inputRef = useRef(null);
  useImperativeHandle(
    ref,
    () => {
      return {
        focus() {
          inputRef.current.focus();
        },
      };
    },
    []
  );
  return (
    <>
      <input value={value} onChange={onChange} ref={inputRef} />
    </>
  );
});

export default Input;
