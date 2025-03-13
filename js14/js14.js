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

for (const key in person) {
  console.log(`${key}: ${person[key]}`);
}

// ① Object.entries(person).forEach((person) => console.log(person));せいはさん

// ② for (const [key, value] of Object.entries(person)) {
//   console.log(`${key}: ${value}`); //せいはさん
// }

console.log("--------------問題7---------------");
//これ！なんだっけ！joinメゾット！！js11
const words = ["I", " ", "love", " ", "JavaScript"];
const abc2 = words.join("");
console.log(abc2);

console.log("--------------問題8---------------");
// js10でやった気がするよなぁ
const students = [
  { name: "Taro", score: 80 },
  { name: "Hanako", score: 95 },
  { name: "Jiro", score: 70 },
  { name: "Yoshiko", score: 85 },
];

students.sort((a, b) => b.score - a.score);
console.log(students);

console.log("--------------問題9---------------");
// ? constUP？習ってない？

console.log("--------------問題10---------------");
const months = ["jan", "feb", "mar", "apr", "may"];

const abc3 = ["spring", "summer", "autumn", ...months.slice(3)];

console.log(abc3);

console.log("--------------問題11---------------");
// わかる
const array = ["apple", "banana", "cherry", "date", "elderberry"];
const fruits = array.slice(2, 5);
console.log(fruits);
console.log(array);

console.log("--------------問題12---------------");
// array.lengthなんだ。
const greetings = ["おはよう", "こんにちは", "こんばんは"];

const abc5 = (array) => array[Math.floor(Math.random() * array.length)];

console.log(abc5(greetings));

console.log("--------------問題13---------------");
//これ課題でやったけど、プルリクに出てこない。探し出せない！！！
const letters = ["B", "a", "c", "e", "k"];
// console.log(letters.sort());これは大文字順になる

const abc6 = letters.sort((a, b) =>
  a.toLowerCase().localeCompare(b.toLowerCase())
); // sort() は配列を並び替える関数。2つの要素（a, b）を比較しながら並び順を決める。
//  (a, b) => は、比較関数sort() に渡して並び替えのルールを決める。
// a.toLowerCase() と b.toLowerCase() 大文字を小文字に変換
// localeCompare() は、文字を比較して 「a が b より前なら -1」「後なら 1」「同じなら 0」 を返す。
console.log(abc6);

console.log("--------------問題14---------------");
const num = Number("10"); // 文字列 '10' を数値に変換
console.log(num); // 数値として出力
console.log(typeof num); // 型の確認
console.log(!isNaN(num)); // 数値であることを確認

console.log("--------------問題15---------------");
let numbers = ["2", "23", "0", "16"];

const abc7 = numbers.sort((a, b) => a - b);
console.log(abc7);
Object.freeze(abc7);

abc7[1] = 30; //2番目の要素を30に変えようとしてみよう
console.log(abc7); // 動かないね

console.log("--------------問題16---------------");
let scores = [12, 5, 8, 130, 44];

let allTen = scores.every((num) => num >= 10); // 全部10以上か
console.log(allTen);

let oneTen = scores.some((num) => num >= 10);
console.log(oneTen); // 10以上の要素が1つでもあるか

console.log("--------------問題17---------------");
//なんか違う？[]が少ないから平坦化すればいいのかな？
const data = [
  ["one", "info@example.com"],
  ["two", "hello@example.com"],
  ["three", "support@example.com"],
];
// const abc8 = data.flat(1);//え、違うの？

// 念の為：forEach() は、配列の各要素に対して順番に処理を実行するメソッド
data.forEach((item) => console.log(item)); // あ、console.logいらんもんな

console.log("--------------問題18---------------");

console.log(undefined == null);
//true　なぜ？==（抽象的比較）」がundefinedとnullはお互いだけは等しいとみなされる！
//  他の値（0, false, "" など）とは等しくないから注意。

console.log("--------------問題19---------------");
// 分割代入
function getValues() {
  return {
    name: "John",
    age: 30,
    city: "New York",
  };
}
const { name, age, city } = getValues();
console.log(name);
console.log(age);
console.log(city);

console.log("--------------問題20---------------");
//　includes()（インクルーズ）かな？
const hello = ["Hello, world! Hello, JavaScript!"];
// const HelloSearch = "Hello, world! Hello, JavaScript!";
// console.log(HelloSearch.includes("Hello"));
const abc9 = hello.join(" ");
console.log(abc9);
console.log(abc9.includes("Hello")); //できたー！

console.log("--------------問題21---------------");
