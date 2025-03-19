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
// 解説調べ済んでるのにコード書いてなかった
// 問題の言葉じゃ意味わからんな、、

// greet関数を定義
function greet(first, second, ...rest) {
  // first は第1引数を受け取り,second は第2引数を受け取り,...restは、3番目以降の引数をひとつの配列としてまとめて受け取りを指定している。
  console.log("first:", first); //first に "Hello" が入る
  console.log("second:", second); // second に "world" が入る
  console.log("rest:", rest); // すべて配列 rest に格納される
}

// greet関数を呼び出し
greet("Hello", "world", "!", "How", "are", "you", "?");
//こんな感じで呼び出しできるの面白いよね
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

console.log("--------------問題32---------------");
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
let obj = {}; // 空のオブジェクトだけどtrueとして評価
// console.log(obj ? true : false);
console.log(Object.keys(obj).length > 0 ? true : false);
// プロパティが1つ以上ある場合は `true`、ない場合は `false`にする

console.log("--------------問題40---------------");
const fruits3 = ["apple", "banana", "orange"];
console.log(fruits3.indexOf("orange"));

console.log("--------------問題41---------------");

const letters2 = ["a", "b", "c"];
letters2[1] = "javascript"; // 1の要素を変える
console.log(letters2);

console.log("--------------問題42---------------");
const numbers1 = [1, -2, 3, -4, 5];
const abc13 = numbers1.filter((num) => num < 0); // num < 0 の要素だけ取得
console.log(abc13);

console.log("--------------問題43---------------");
// const abc14 = data === null;
// console.log(abc14);
const datas = null; // dataの値は null
console.log(datas === null); //こうゆうこと？

console.log("--------------問題44---------------");

const zeros = [0, 0, 0];

// スプレッド構文で新しい配列を作成
const abc15 = [...zeros];
abc15.fill(7, 1); // インデックス1から最後まで7に変更

console.log(abc15); // [0, 7, 7]

console.log("--------------問題45---------------");
const num3 = 3.14159;
console.log(Math.trunc(num3));

console.log("--------------問題46---------------");
const obj2 = {
  name3: "Taro",
  age3: 25,
};
const { name3, age3 } = obj2; // すでに使われているから3つけた

console.log(name3);
console.log(age3);

console.log("--------------問題47---------------");
const str4 = "JavaScript";

const firstChar = str4[0];
const fifthChar = str4[4];

console.log(firstChar); // 'J'
console.log(fifthChar); // 'S'

console.log("--------------問題48---------------");
// フラット化/平坦化だflat()
const nested = [1, [2, 3, 4], 5, [6, 7]];
const flats = nested.flat();

console.log(flats);

console.log("--------------問題49---------------");
// splitで区切って、他にもう1つどうやって繋げよう、、、
const sentence = "The quick brown fox";
const wordsObj = Object.fromEntries(
  sentence.split(" ").map((word, index) => [index, word])
); // `split()` で単語に分割し、`map()` で `[index, word]` のペアを作成するんだ
console.log(wordsObj);

console.log("--------------問題50---------------");
// なんだ？
//可変長引数を処理するみたい
// 2つの引数 a と b を受け取り、その合計を返す
function add(a = 1, b = 2) {
  return a + b;
}
//	引数 a のデフォルト値が 1（何も渡されなかったとき a = 1 になる）
// 引数 b のデフォルト値が 2（何も渡されなかったとき b = 2 になる）

console.log(add()); // 3  (デフォルト値: 1 + 2)
console.log(add(2)); // 4  (2 + デフォルト値 2)
console.log(add(2, 3)); // 5  (2 + 3)

console.log("--------------問題51---------------");
const condition = true; // 変数 condition を true に設定。

if (condition) {
  doSomething();
}

condition && doSomething(); // && を使う

function doSomething() {
  console.log("実行");
}
//2回 “実行” が表示されるのは、if 文と && で doSomething(); を2回呼び出している

console.log("--------------問題52---------------");

const original = { name: "Taro", age: 25 };

const copied = { ...original }; // 値渡し（コピー）で新しいオブジェクトを作成

// originalのプロパティを変更してみる
original.name = "Jiro";
original.age = 30;

// copied に影響がないか確認する
console.log(original); // { name: "Jiro", age: 30 }
console.log(copied); // { name: "Taro", age: 25 }（影響を受けない）

console.log("--------------問題53---------------");

const name4 = "Taro Yamada";
const address = "Tokyo";

const obj3 = {
  name4, // ショートハンド
  age: 30,
  city: "Osaka",
  address, // ショートハンド
};
console.log(obj3);

console.log("--------------問題54---------------");
//　これは簡単
const nestedArray = [
  [0, 1],
  [2, 3],
  [4, 5],
];
const flat2 = nestedArray.flat();

console.log(flat2);

console.log("--------------問題55---------------");
// 三項演算子を使わないんだ
// const foo = a ? a : b;
// const bar = c ? true : false;
// const baz = c ? false : true;
let a = "";
let b = "B";
let c = "C"; // 定義しないといけないのか？

const foo = a || b; // aが真値（truthy）ならaを代入。そうでなければbを代入。
const bar = !!c; // 変数cをboolean型に変換。!! は「二重否定」と呼ばれ、trueかfalseを明示的に作る。
const baz = !c; // 変数cの真偽値を反転した値を代入。
// 難しかった

console.log(foo);
console.log(bar);
console.log(baz);

console.log("--------------問題56---------------");
// Setオブジェクト　重複を許さない特徴がある。
const duplicatedArray = [1, 1, "a", "a", "b", "c", "c"];

// Setを使って重複要素を除去して、新しい配列を作成しているんだ
const uniqueArray = [...new Set(duplicatedArray)];

console.log(uniqueArray);

console.log("--------------問題57---------------");
// 覚えてる！unshift配列の"先頭"に要素を"追加"
const array3 = ["apple", "banana", "cherry"];
array3.unshift("orange");
console.log(array3);

console.log("--------------問題58---------------");
// .filter() メソッド

const numbers2 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const result = numbers2.filter((num) => num % 2 !== 0 && num % 3 !== 0);
// 2で割り切れない → num % 2 !== 0
// 3で割り切れない → num % 3 !== 0
// これらを両方満たす必要があるため、論理AND演算子（&&）使う！
console.log(result);

console.log("--------------問題59---------------");
// Object.valuesはオブジェクトの値（value）のみを取り出して配列にするメソッド
const myObject = {
  1: ["apple", "banana", "cherry"],
  2: ["dog", "cat", "bird"],
};

const myArray = Object.values(myObject); // オブジェクトの値だけを取り出し、多次元配列に変換

console.log("--------------問題60---------------");
// Object.assign()
const fruits4 = ["apple", "banana", "cherry"];

// 配列をインデックスをキーとするオブジェクトに変換
const abc16 = Object.assign({}, fruits4);
//Object.assign({}, array) は、配列をインデックス番号をキーとしたオブジェクトに変換.
//	配列の各要素はインデックスをキーにして新しいオブジェクトにコピー

console.log(abc16);

// 終わったーーーーーーーーー！！！！！！
