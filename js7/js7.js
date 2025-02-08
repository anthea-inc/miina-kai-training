const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.question("数値を入力してください: ", (input) => {
  let num = Number(input);

  if (num > 0) {
    console.log("正の数です");
  } else if (num < 0) {
    console.log("負の数です");
  } else {
    console.log("ゼロです");
  }

  rl.close();
});
