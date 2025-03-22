const num1 = process.argv[2];
const num2 = process.argv[3];
//ifを使いところまでは理解している。
console.log(num1);
console.log(num2);
try {
  if (isNaN(num1) || isNaN(num2)) {
    throw new Error("これは数値ではない");
  }
  if (num1 === 0) {
    // 0での割り算はエラー
    throw new Error("0で割ることはできません");
  }
} catch (error) {
  console.error("エラーが発生");
}
