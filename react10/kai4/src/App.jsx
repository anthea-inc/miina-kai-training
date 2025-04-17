// import { useState } from "react";
// import reactLogo from "./assets/react.svg";
// import viteLogo from "/vite.svg";

import React from "react";
import "./index.css"; // Tailwindの @tailwind ディレクティブを置いたCSS
import Button from "./components/Button";
import Card from "./components/Card";

export default function App() {
  return (
    <div className="p-8 space-y-6">
      <Button />
      <Card title="お知らせ">
        <p>これは Tailwind CSS で作ったカードの本文です。</p>
      </Card>
    </div>
  );
}
