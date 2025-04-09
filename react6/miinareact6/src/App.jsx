// 実践課題1
// import React from "react";
// import Counter from "./Counter"; // カウントコンポーネントを読み込み

// function App() {
//   return (
//     <div>
//       <p>実践課題1</p>
//       <h1>Reactカウントアプリ</h1>
//       <Counter />
//     </div>
//   );
// }

// export default App;

//実践課題2

// import React from "react";
// import CounterWithTitle from "./CounterWithTitle";

// function App() {
//   return (
//     <div>
//       <p>実践課題2</p>
//       <h1>課題2 useEffectでタイトル更新</h1>
//       <CounterWithTitle />
//     </div>
//   );
// }

// export default App;

//実践課題3
// import React from "react";
// import ThemeContext from "./ThemeContext";
// import ThemeDisplay from "./ThemeDisplay";

// function App() {
//   return (
//     <ThemeContext.Provider value="dark">
//       <div>
//         <p>実践課題3</p>
//         <h1>Context使ってみよう！</h1>
//         <ThemeDisplay />
//       </div>
//     </ThemeContext.Provider>
//   );
// }

// export default App;

// 実践課題4
// import React from "react";
// import FocusInput from "./FocusInput";

// function App() {
//   return (
//     <div>
//       <p>実践課題4</p>
//       <h1>useRefで入力欄にフォーカス</h1>
//       <FocusInput />
//     </div>
//   );
// }

// export default App;

//実践課題5
// import React from "react";
// import CounterReducer from "./CounterReducer";

// function App() {
//   return (
//     <div>
//       <p>実践課題5</p>
//       <h1>useReducerカウントアプリ</h1>
//       <CounterReducer />
//     </div>
//   );
// }

// export default App;

// 実践課題6
import React from "react";
import CounterA from "./CounterA";
import CounterB from "./CounterB";

function App() {
  return (
    <div>
      <p>実践課題6</p>
      <h1>カスタムフックでカウント</h1>
      <CounterA />
      <CounterB />
    </div>
  );
}

export default App;
