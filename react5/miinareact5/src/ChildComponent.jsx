import React from "react";

function ChildComponent({ onButtonClick }) {
  return <button onClick={onButtonClick}>クリックしてね</button>;
}
export default ChildComponent;
