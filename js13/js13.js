function createCounter() {
  let count = 0; // 外側の関数で定義した変数（プライベート）

  return function () {
    count++;
    return count;
  };
}

// クロージャーを利用した関数を作成
const counter = createCounter();

console.log(counter()); // 1
console.log(counter()); // 2
console.log(counter()); // 3
