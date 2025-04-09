//実践課題3

import React, { useContext } from "react";
import ThemeContext from "./ThemeContext";

function ThemeDisplay() {
  const theme = useContext(ThemeContext);

  return <p>現在のテーマは: {theme}</p>;
}

export default ThemeDisplay;
