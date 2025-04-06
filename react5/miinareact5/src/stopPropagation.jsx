//stopPropagation() を使っていない状態

// import React from "react";

// function EventBubbleTest() {
//   const handleOuterClick = () => {
//     console.log("外側のdivがクリックされました");
//   };

//   const handleButtonClick = () => {
//     console.log("ボタンがクリックされました");
//   };

//   return (
//     <div
//       onClick={handleOuterClick}
//       style={{
//         padding: "50px",
//         backgroundColor: "#d0f0ff",
//         textAlign: "center",
//       }}
//     >
//       <button onClick={handleButtonClick}>クリックしてね</button>
//     </div>
//   );
// }

// export default EventBubbleTest;

// e.stopPropagation() を使っている
import React from "react";

function StopPropagation() {
  const handleOuterClick = () => {
    console.log("外側のdivがクリックされました"); //これが親
  };

  const handleButtonClick = (event) => {
    event.stopPropagation(); // 親へのバブリングを止める
    console.log("ボタンがクリックされました");
  };

  return (
    <div
      onClick={handleOuterClick}
      style={{
        padding: "50px",
        backgroundColor: "#e0e0ff",
        textAlign: "center",
      }} //分かりやすいように色つけるのが良いみたい
    >
      <button onClick={handleButtonClick}>クリックしてね</button>
    </div>
  );
}

export default StopPropagation;
