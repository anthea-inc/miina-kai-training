console.log("--------------問題1---------------");
const fruit = { name: "apple" };
const color = { hue: "red" };

const ringo = {
  fruit: fruit.name,
  color: color.hue,
};

console.log(ringo);

console.log("--------------問題2---------------");
// スライス　これは大丈夫
const daysOfWeek = [
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
  "Sunday",
];
const dey = daysOfWeek.slice(3, 6);
console.log(dey);

console.log("--------------問題3---------------");
// 一個づつ処理して出すやつだったかな。foreachか？でも書き方、、、
// const pets = ["dog", "cat"];
// pets.forEach(pets.dog, pets.cat);{
//  console.log(pets);}

const pets = ["dog", "cat"];

pets.forEach((pet) => {
  console.log(pet);
});

console.log("--------------問題4---------------");
// 前とか後ろにじゃなくて要素に入れるの、、？とりあえずインデックス入れよう

const vehicles = ["car", "bike"];

const abc = vehicles.map((Array, index) => {
  //=>はアロー関数
  return Array + index; //要素にインデックス番号を追加した文字列を返す・Array配列内の各要素
});
console.log(abc);

console.log("--------------問題5---------------");
//JS10 Array.isArray 　これはconsole.logで指定する
const myHobbies = ["reading", "swimming"];

console.log(Array.isArray(myHobbies)); //myHobbiesが配列であるかを正しく判定

console.log("--------------問題6---------------");
//次のオブジェクトの全てのキーと値を、自身のプロパティとして出力してください。
//自身のプロパティとして出力ってなんだ？A,オブジェクトが直接持っているキーと値のこと。継承されたプロパティ（親オブジェクトから受け継いだもの） は含まない。
const person = {
  name: "Taro",
  age: 25,
};
