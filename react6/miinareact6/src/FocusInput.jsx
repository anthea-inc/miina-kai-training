// 実践課題4
import React, { useRef } from "react";

function FocusInput() {
  const inputRef = useRef(null); // ① refオブジェクトを作成

  const handleClick = () => {
    inputRef.current.focus(); // ⑤ ボタンがクリックされたらフォーカス！
  };

  return (
    <div>
      <input
        type="text"
        ref={inputRef}
        placeholder="ここにフォーカスが当たるよ"
      />
      <button onClick={handleClick}>フォーカスを当てる</button>
    </div>
  );
}

export default FocusInput;
