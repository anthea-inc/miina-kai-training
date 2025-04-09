// 実践課題5
// CounterReducer.jsx
import React, { useReducer } from "react";

// ① 初期状態
const initialState = { count: 0 };

// ② reducer関数
function reducer(state, action) {
  switch (action.type) {
    case "increment":
      return { count: state.count + 1 };
    case "decrement":
      return { count: state.count - 1 };
    case "reset":
      return { count: 0 };
    case "add":
      return { count: state.count + action.payload };
    default:
      return state; // 未定義のアクションは状態を変えない
  }
}

// ③ コンポーネント
function CounterReducer() {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <div>
      <h2>現在のカウント: {state.count}</h2>
      <button onClick={() => dispatch({ type: "increment" })}>+1</button>
      <button onClick={() => dispatch({ type: "decrement" })}>-1</button>
      <button onClick={() => dispatch({ type: "reset" })}>リセット</button>
      <button onClick={() => dispatch({ type: "add", payload: 5 })}>+5</button>
    </div>
  );
}

export default CounterReducer;
