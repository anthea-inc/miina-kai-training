function step1() {
  return new Promise((resolve) => {
    setTimeout(() => {
      console.log("step1 完了");
      resolve("データ1");
    }, 1000);
  });
}

function step2() {
  return new Promise((resolve) => {
    setTimeout(() => {
      console.log("step2 完了");
      resolve("データ2");
    }, 2000);
  });
}

function step3() {
  return new Promise((resolve) => {
    setTimeout(() => {
      console.log("step3 完了");
      resolve("データ3");
    }, 500);
  });
}

async function testRace() {
  try {
    console.log("await-Promise.race実行開始");

    const result = await Promise.race([step1(), step2(), step3()]);

    console.log("一番早く終わったのは:", result);
  } catch (err) {
    console.error("最初に失敗したのは:", err);
  }
}

testRace();
