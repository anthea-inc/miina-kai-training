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
// リピート
const str = "Hello";
console.log(str.repeat(3));

console.log("--------------問題22---------------");
// split
const abc10 = "JavaScript";
const abc11 = abc10.split("");
console.log(abc11);

console.log("--------------問題23---------------");
const str2 = "Anthropic"; // 分割代入
const [char1, char2, ...rest] = str2; // 上の文字を1つずつ分解で
// 左から順番に値を取り出す。char1は1文字目のA,char2は2文字目のn,...restは残りのすべて
console.log(char1);
console.log(char2);
console.log(rest);

console.log("--------------問題24---------------");
//？

console.log("--------------問題25---------------");
arr1 = [1, 2, 3];
arr2 = [4, 5, 6];

// arr1.push(...arr2);後ろに追加してしまえば
// console.log(arr1);//破壊的メゾットなんだよなぁ

const Arr3 = [...arr1, ...arr2]; // 要素を展開し、新しい配列を作成
console.log(Arr3);

console.log("--------------問題26---------------");
// console.logに文字列追加すればいいんだよね(テンプレートリテラル)
function getMessage() {
  return "Hello, JavaScript!";
}

console.log(`The message is: ${getMessage()}`); //${} の中に関数を書くことで、関数が実行され、その戻り値が埋め込まれる

console.log("--------------問題27---------------");
function addNumbers({ a, b }) {
  // 関数の中身を実装してください
  return a + b;
}
console.log(addNumbers({ a: 1, b: 2 }));

console.log("--------------問題28---------------");
const names = [
  ["Alice", "Bob", "Charlie"],
  ["David", "Eve", "Frank"],
]; //  2次元配列（配列の中に配列がある状態）だから２重のmap()で対抗だ！
const sun = names.map((row) => row.map((name) => name + "さん"));
// 各要素（行 row）も配列であり、各 row の中に名前（name）が入っている
// 外側のmap()：namesの各要素（配列 row）に対して処理。
//内側のmap():row の各要素（name）に 'さん' を付ける。

console.log(sun);

console.log("--------------問題29---------------");
//28と少し違う、同じ配列？かな
const people = [{ name: "Alice" }, { name: "Bob" }];

const newPeople = people.map((person) => person.name + "さん");

console.log(newPeople);

console.log("--------------問題30---------------");

const data2 = [
  ["apple", "banana"],
  ["carrot", "durian"],
];

data2.forEach((subArray) => console.log(subArray[0]));
// 	subArray には data2 の各サブ配列が代入.subArray[0] を取得し出力
//最初の要素を取得

console.log("--------------問題31---------------");
//slice()
const fruits2 = ["apple", "banana"];
const copy = fruits2.slice(); // 配列をコピー

fruits2.length = 0; // 元の配列を空にする
fruits2.push("kiwi", "orange"); // 新しい要素

console.log("copy:", copy);
console.log("fruits:", fruits2);

// const copy = fruits2; //これは 何も調べずに感覚で行った結果
// const fruits3 = ["kiwi", "orange"];

// console.log(copy);
// console.log(fruits3);

console.log("--------------！！！！問題32！！！！---------------");
// splice()配列の要素を削除・追加・置き換えするメソッド
// indexOf() は、配列の中で特定の要素が何番目にあるか（インデックス）を取得

const arrays = ["A", "B", "C", "D", "E"];

const indexE = arrays.indexOf("E");
arrays.splice(indexE, 1);

arrays.splice(1, 0, "E");
console.log(arrays);

console.log("--------------問題33---------------");
//hasOwnProperty:自身が持つプロパティのみ判定するので、継承されたプロパティをチェックしない。（自身が持つプロパティのみ判定）。

const arr = [10, 20];
console.log(arr.hasOwnProperty(2));

console.log("--------------問題34---------------");
const str3 = "-9";
const num2 = Number(str3); // 数値（number）に変換
console.log(num2);
console.log(typeof num2);

console.log("--------------問題35---------------");
const greeting = "こんにちは";
const name2 = "田中さん";

const abc12 = `${greeting} ${name2}、いい天気ですね`; //()で囲んだら全部もじれつにな
console.log(abc12);

console.log("--------------問題36---------------");
// 論理演算子 ||
let target; // 事前に宣言
console.log(target === null || target === undefined);

console.log("--------------問題37---------------");
let array2 = [];

console.log(array2.length > 0);

console.log("--------------問題38---------------");
// || は 「左側が falsy（偽）」なら右側の値を使うという性質
// ??（Nullish Coalescing Operator）を使う
// ?? を使うと null または undefined のときだけ 10 を使う という処理ができ、左側が 0 や false なら → そのまま使う
const value = 0;
const target2 = value ?? 10; // 0はfalsy（偽）なので、10が代入される

console.log(target2); //なるほどねぇ

console.log("--------------問題39---------------");
let obj = {};
console.log(obj ? true : false);
