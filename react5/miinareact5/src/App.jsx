// 実践課題1
// import OnClickButtons from "./onClick";

// function App() {
//   return (
//     <div style={{ padding: "20px" }}>
//       <h1>React ボタンクリックの例</h1>
//       <OnClickButtons />
//     </div>
//   );
// }

// 実践課題2
// import ChildComponent from "./ChildComponent";

// function App() {
//   const handleClick = () => {
//     alert("ボタンがクリックされました！");
//   };

//   return <ChildComponent onButtonClick={handleClick} />;
// }

// export default App;
// すごい！できた！

// 実践課題3
// import React from "react";
// import TextInputForm from "./TextInputForm";

// function App() {
//   return (
//     <div>
//       <h1>テキスト送信フォーム</h1>
//       <TextInputForm />
//     </div>
//   );
// }

// export default App;

// 実践課題4
import React from "react";
import StopPropagation from "./stopPropagation";

function App() {
  return (
    <div>
      <h1>イベントのバブリングを止める</h1>
      <StopPropagation />
    </div>
  );
}

export default App;
