console.log("------------実践課題1------------");
// なんだこれ
function calculateArea(width, height) {
  return width * height;
}
console.log(calculateArea(10, 10));
// 	1.	function calculateArea(width, height) {}関数宣言 を使って calculateArea という名前の関数を定義する。
// 	width（幅）と height（高さ）の2つの引数を受け取る。
// return width * height; width と height を掛け算し、その結果（面積）を返す。
console.log("------------実践課題2------------");
function sumNumbers(...nums) {
  console.log(`渡された引数の数: ${arguments.length}`); // 渡された引数の数を確認
  return nums.reduce((sum, num) => sum + num, 0); // 合計値を計算
}

console.log(sumNumbers(1, 2, 3, 4));
console.log(sumNumbers());
// Rest parameters (...nums) を使って複数の引数を受け取る
// arguments.length を使って渡された引数の数を確認
// デフォルト値が適用され、引数がないときは合計 0 になる

console.log("------------実践課題3------------");
