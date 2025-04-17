import "../panda.css";

import React from "react";
import Card from "./components/Card";

function App() {
  return (
    <div style={{ padding: "2rem" }}>
      <h1>カードテスト</h1>
      <Card title="お知らせ">
        <p>これはカードの本文です。</p>
      </Card>
    </div>
  );
}

export default App;
