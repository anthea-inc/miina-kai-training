const myString = "Hello, World!";
console.log(myString); // "Hello, World!

console.log(typeof myString); // "string"

console.log("--------------------------------");

const myNumber = 100; // "名はなんでも良い"
console.log(myNumber); // myNumberの変数の値が何か

console.log(typeof myNumber); // typeofはマイナンバーの型定義を聞いている

console.log("--------------------------------");

const myBigint = 9183467692384729n;
console.log(myBigint);

console.log(typeof myBigint);

console.log("--------------------------------");

const myBoolean = true;
console.log(myBoolean);

console.log(typeof myBoolean);

console.log("--------------------------------");

let myUndefined; // constは代入とセットだから、何も入力しないとエラー
console.log(myUndefined);

console.log(typeof myUndefined);

console.log("--------------------------------");

let mySymbol1 = Symbol("Miina");
let mySymbol2 = Symbol("Miina");
console.log(mySymbol1);
console.log(mySymbol2);

console.log(typeof mySymbol1);
console.log(typeof mySymbol2);

console.log("--------------------------------");

let myNull = null;
console.log(myNull);

console.log(typeof myNull);
