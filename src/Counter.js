import { useState } from "react";

function Counter() {
  const [count, setCount] = useState(0);

  const handlerPlus = () => {
    let value = checkValue(count + 1);
    setCount(value);
  };
  const handlerMinus = () => {
    let value = checkValue(count - 1);
    setCount(value);
  };

  const handlerReset = () => {
    setCount(0);
  };

  const checkValue = (count) => {
    if (count < 0) {
      alert("Count can't be less than zero.");
      return 0;
    } else {
      return count;
    }
  };

  return (
    <>
      <button onClick={handlerMinus}>-</button>
      <span>{count}</span>
      <button onClick={handlerPlus}>+</button>
      <button onClick={handlerReset}>Reset</button>
    </>
  );
}
export default Counter;
