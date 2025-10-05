// 実践課題1
const a = 10;
const b = 3;

console.log(a + b);
console.log(a - b);
console.log(a * b);
console.log(a / b);
console.log(a % b);
console.log(a ** b);

const age = 22;
console.log("私は " + age + " 歳です");

console.log("--------------------------------");
// 実践課題2

let x = 5;
console.log(x++); // ① 後置インクリメント
console.log(x); // ②

let y = 5;
console.log(++y); // ③ 前置インクリメント
console.log(y); // ④

console.log("--------------------------------");

let str1 = "10";
let num1 = +str1; // 単項加算演算子
console.log(num1);

let str2 = "100";
let num2 = -str2; // 単項減算演算子
console.log(num2);
