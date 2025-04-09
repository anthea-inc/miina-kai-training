// 実践課題1
// import React from "react";
// import Counter from "./Counter"; // カウントコンポーネントを読み込み

// function App() {
//   return (
//     <div>
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
//       <h1>課題2 useEffectでタイトル更新</h1>
//       <CounterWithTitle />
//     </div>
//   );
// }

// export default App;

//実践課題3
import React from "react";
import ThemeContext from "./ThemeContext";
import ThemeDisplay from "./ThemeDisplay";

function App() {
  return (
    <ThemeContext.Provider value="dark">
      <div>
        <h1>Context使ってみよう！</h1>
        <ThemeDisplay />
      </div>
    </ThemeContext.Provider>
  );
}

export default App;
