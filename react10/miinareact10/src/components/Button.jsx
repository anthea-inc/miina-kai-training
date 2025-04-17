import React from "react";
import styles from "./Button.module.css";

function Button() {
  return (
    <button className={styles["my-button"]}>クリックしてね</button>
    // または → className={styles.myButton} ←キャメルケース対応らしい
  );
}

export default Button;

// .js の書き方
// function Button() {
//   return <button className="my-button">ボタン</button>;
// }
// export default Button;
//	CSSファイルを import して使えるようにしてる
// 	className="my-button" で、CSSで定義したクラスを当てている

// 実践課題2確認する場所button__my-button_k2vlw__1
