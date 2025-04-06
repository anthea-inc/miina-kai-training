import React from "react";

function OnClickButtons() {
  // 方法②: 関数を事前に定義して使う
  const handleClick = () => {
    console.log("ボタンがクリックされました！（関数を事前定義）");
  };

  return (
    <div>
      {/* 方法①: onClick に直接関数を渡す */}
      <button
        onClick={() => console.log("ボタンがクリックされました！（直接定義）")}
      >
        直接関数で処理
      </button>

      <br />
      <br />

      {/* 方法②: 事前定義した関数を使う */}
      <button onClick={handleClick}>事前定義した関数で処理</button>
    </div>
  );
}

export default OnClickButtons;
