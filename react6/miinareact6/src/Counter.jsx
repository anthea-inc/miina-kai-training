import React, { useState } from "react";

function Counter() {
  const [count, setCount] = useState(0); // カウント状態（初期値は 0）

  const handleClick = () => {
    setCount(count + 1); // クリックごとに +1
  };

  return (
    <div>
      <h2>カウント: {count}</h2>
      <button onClick={handleClick}>+1する</button>
    </div>
  );
}

export default Counter;
