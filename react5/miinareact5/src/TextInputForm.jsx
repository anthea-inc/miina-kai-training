import React, { useState } from "react";

function TextInputForm() {
  const [text, setText] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault(); // ページの再読み込みを防ぐ
    console.log("入力されたテキスト:", text);
    // 必要なら、送信後にテキストをクリア
    // setText('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="テキストを入力"
      />
      <button type="submit">送信</button>
    </form>
  );
}

export default TextInputForm;
