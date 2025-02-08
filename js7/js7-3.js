const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.question("1から7の整数を入力してください: ", (input) => {
  let day = Number(input);

  if (day === 1) {
    console.log("月曜日");
  } else if (day === 2) {
    console.log("火曜日");
  } else if (day === 3) {
    console.log("水曜日");
  } else if (day === 4) {
    console.log("木曜日");
  } else if (day === 5) {
    console.log("金曜日");
  } else if (day === 6) {
    console.log("土曜日");
  } else if (day === 7) {
    console.log("日曜日");
  } else {
    console.log("無効な入力です");
  }

  rl.close();
});
