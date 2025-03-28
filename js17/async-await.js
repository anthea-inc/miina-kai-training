function step1() {
  return new Promise((resolve) => {
    setTimeout(() => {
      console.log("Stap1 完了");
      resolve("データ1");
    }, 1000);
  });
} // おさらいsetTimeout：〇〇ミリ秒後にこれを実行してねってお願いする命令（関数）

function step2(input) {
  return new Promise((resolve) => {
    setTimeout(() => {
      console.log("Step2 完了、受け取ったデータ:", input);
      resolve("データ2");
    }, 1000);
  });
}

function step3(input) {
  return new Promise((resolve) => {
    setTimeout(() => {
      console.log("Step3 完了, 受け取ったデータ:", input);
      resolve("最終結果");
    }, 1000);
  });
}

// async function でPromiseを順番に処理

async function runSteps() {
  // runSteps:いくつかの処理を順番に実行する関数
  try {
    console.log("Async/Await での実行開始");

    const data1 = await step1(); // step1がresolveされるまで待機
    const data2 = await step2(data1);
    const final = await step3(data2);

    console.log("すべてのステップが完了しました:", final);
  } catch (error) {
    console.error("エラー発生:", error);
  }
}
runSteps();
