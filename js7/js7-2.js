const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.question("数値を入力してください: ", (input) => {
  let num = Number(input);

  console.log(num > 0 ? "正の数です" : num < 0 ? "負の数です" : "ゼロです");
  // 条件 ? 真の場合の処理 : 偽の場合の処理;

  rl.close();
});
