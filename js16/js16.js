const num1 = process.argv[2]; // 割られる数
const num2 = process.argv[3]; // 割る数
//ifを使うところまでは理解している。
console.log(num1);
console.log(num2);
try {
  if (isNaN(num1) || isNaN(num2)) {
    throw new Error("これは数値ではない");
  }

  const number1 = Number(num1);
  const number2 = Number(num2);
  // num1 / num2 は文字列のままだと、意図しない計算になる可能性があるから、Number() で変換した方が安全みたい

  if (number2 === 0) {
    // 割る数（num2）が 0 かどうかだからnum2
    // 0での割り算はエラー
    throw new Error("0で割ることはできません");
  }

  const result = number1 / number2; // 割り算処理
  console.log(`結果: ${result}`);
} catch (error) {
  console.error(`エラー [${error.name}]: ${error.message}`);
  // name/messageプロパティを表示する
} finally {
  // 絶対に実行される
  console.log("処理終了");
}
