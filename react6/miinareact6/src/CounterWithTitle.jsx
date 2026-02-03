// 実践課題2

import React, { useState, useEffect } from "react";

function CounterWithTitle() {
  const [count, setCount] = useState(0);

  // 副作用：タイトルを更新する
  useEffect(() => {
    document.title = `現在のカウント: ${count}`;
  }, [count]); // ← count が変わったときだけ実行！

  const handleClick = () => {
    setCount(count + 1);
  };

  return (
    <div>
      <h2>カウント: {count}</h2>
      <button onClick={handleClick}>+1する</button>
    </div>
  );
}

export default CounterWithTitle;
