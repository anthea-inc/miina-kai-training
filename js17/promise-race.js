const taskX = new Promise((resolve) =>
  setTimeout(() => resolve("Xが先に終わった！"), 500)
);

const taskY = new Promise((resolve) =>
  setTimeout(() => resolve("Yが先に終わった！"), 800)
);

const taskZ = new Promise(
  (resolve, reject) => setTimeout(() => reject("Zが先に失敗！"), 300) //0.3秒後
);

Promise.race([taskX, taskY, taskZ])
  .then((result) => {
    console.log("最初に完了したタスク:", result);
  })

  .catch((err) => {
    console.error("最初に失敗/完了したタスク:", err);
  });
//"Zが先に失敗！"の方が300(0.3秒後に実行される)から何度nodeしてもこれが早い。
