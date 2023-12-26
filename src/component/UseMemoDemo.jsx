import { useMemo, useRef, useState } from "react";
import Button from "./Button";
import Input from "./Input";
import useInput from "../hook/useInput";

function UseMemoDemo() {
  const [list, setList] = useState([]);
  const valueProduct = useInput("");
  const valuePrice = useInput();
  const ref = useRef(null);

  function handleCount() {
    setList([
      ...list,
      {
        product: valueProduct.value,
        price: +valuePrice.value,
      },
    ]);
    ref.current.focus();
  }
  const total = useMemo(() => {
    const resul = list.reduce((resul, item) => {
      return resul + item.price;
    }, 0);
    return resul;
  }, [list]);

  return (
    <>
      <Input {...valueProduct} ref={ref} />
      <br />
      <Input {...valuePrice} />
      <br />
      <Button onclick={handleCount}> tổng </Button>
      <br />
      <h1>{total}</h1>
    </>
  );
}
export default UseMemoDemo;
