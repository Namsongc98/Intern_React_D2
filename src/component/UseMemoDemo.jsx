import { useMemo, useRef, useState } from "react";
import Button from "./Button";
import Input from "./Input";  

function UseMemoDemo() {
  const [product, setProduct] = useState("");
  const [price, setPrice] = useState(0);
  const [list, setList] = useState([]);
  const ref = useRef(null);

  function handleCount() {
    setList([
      ...list,
      {
        product,
        price: +price,
      },
    ]);
    console.log(ref);
    ref.current.focus();
  }

  const total = useMemo(() => {
    const resul = list.reduce((resul, item) => {
      return resul + item.price;
    }, 0);
    return resul;
  }, [list]);
  function getProduct(e) {
    setProduct(e.target.value);
  }

  function getPrice(e) {
    setPrice(e.target.value);
  }

  return (
    <>
      <Input value={product} onChange={getProduct} ref={ref} />
      <br />
      <Input value={price} onChange={getPrice} />
      <br />
      <Button onclick={handleCount}> tổng </Button>
      <br />
      <h1>{total}</h1>
    </>
  );
}
export default UseMemoDemo;
