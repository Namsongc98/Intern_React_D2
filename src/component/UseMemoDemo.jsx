import { useMemo, useState } from "react";
import Button from "./Button";

function UseMemoDemo() {
  const [product, setProduct] = useState("");
  const [price, setPrice] = useState(0);
  const [list, setList] = useState([]);

  function handleCount() {
    setList([
      ...list,
      {
        product,
        price: +price,
      },
    ]);
  }
  const total = useMemo(() => {
    const resul = list.reduce((resul, item) => {
      return resul + item.price;
    }, 0);
    return resul;
  }, [list]);
function getDataInput (e){
   setProduct(e.target.value)
}
  return (
    <>
      <input
        type="text"
        value={product}
        onChange={(e)=>getDataInput(e)}
      />
      <br />
      <input
        type="text"
        value={price}
        onChange={(e) => setPrice(e.target.value)}
      />
      <br />
      <Button onclick={handleCount}> tổng </Button>
      <br />
      <h1>{total}</h1>
    </>
  );
}
export default UseMemoDemo;
