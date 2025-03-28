function step1() {
  return new Promise((resolve) => {
    setTimeout(() => {
      console.log("step1 完了（1秒後）");
      resolve("データ1");
    }, 1000);
  });
}

function step2() {
  return new Promise((resolve) => {
    setTimeout(() => {
      console.log("step2 完了（2秒後）");
      resolve("データ2");
    }, 2000);
  });
}

function step3() {
  return new Promise((resolve) => {
    setTimeout(() => {
      console.log("step3 完了（0.5秒後）");
      resolve("データ3");
    }, 500);
  });
}

async function testAll() {
  try {
    console.log("await-Promise.allでの実行開始");

    const results = await Promise.all([step1(), step2(), step3()]);

    console.log("すべて完了。結果:", results);
  } catch (err) {
    console.error("どれかが失敗した:", err);
  }
}

testAll();
