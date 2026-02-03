// 実践課題6-A
// CounterA.jsx
import React from "react";
import useCounter from "./useCounter";

function CounterA() {
  const { count, increment } = useCounter();

  return (
    <div>
      <h2>カウンターA: {count}</h2>
      <button onClick={increment}>+1</button>
    </div>
  );
}

export default CounterA;
