// 実践課題6-B
// CounterB.jsx
import React from "react";
import useCounter from "./useCounter";

function CounterB() {
  const { count, increment } = useCounter();

  return (
    <div>
      <h2>カウンターB: {count}</h2>
      <button onClick={increment}>+1</button>
    </div>
  );
}

export default CounterB;
