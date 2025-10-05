知識課題 1
オブジェクトリテラルにおいて、プロパティ名をクォートなしで記述できる場合と、クォートが必要となる場合について、具体的なコード例を示しながら、理由を説明してください。

プロパティ名をクォートなしで記述できる場合:

英字、アンダースコア（\_）、ドル記号（$） で始まる。
数字で始めてはいけない。(最初以外には数字を含んでも良い)
予約語（例: for, if, return など）ではない。

const my = {
name: "miina",
age: 22,
\_id: 0818,
$status: "active"
};

クォートが必要となる場合:

スペースを含む場合
ハイフン（-）や特殊文字を含む場合
数字で始まる場合
JavaScript の予約語をプロパティ名に使用する場合

const user = {
"first name": "miina", // スペースを含む
"last-name": "kai", // ハイフンを含む
"2ndPlace": "Silver", // 数字で始まる
"return": "Reserved Word" // 予約語を使用
};

オブジェクトリテラル内でブラケット記法（[]）を利用してプロパティ名を動的に設定する方法について、具体的なコード例を示しながら、そのメリットや利用シーンを解説してください。

（ブラケット記法（[])：JavaScript で オブジェクトのプロパティ名を動的に設定したり、アクセスするための方法。スペースや記号がある名前のときや変数を使って名前を決めたいときに便利。
オブジェクト名[" プロパティ名"]）

ブラケット記法（[]） を使うと、プロパティ名を 変数 や 計算結果 から動的に設定できる。

通常は以下のように 固定された名前 でプロパティを設定。
const person = {
name: "Miina",
age: 22
};

ブラケット記法を使ったプロパティ名の動的設定とは：
通常、オブジェクトのプロパティ名は固定された名前で設定する。
動的にプロパティ名を設定する基本構文。
const keyName = "username"; // プロパティ名を変数で用意

const user = {
[keyName]: "miina" // ブラケット記法で動的にプロパティ名を設定
};

console.log(user); // { username: "miina" }
console.log(user.username);

メモ：keyName という変数の中身（"username"）が、プロパティ名として使われており、keyName という変数の中身（"username"）が、プロパティ名として使われる。

例１
具体的なコード例とそのメリット：
const schoolGrades = {
["grade" + 1]: "1 年生",
["grade" + 2]: "2 年生",
["grade" + 3]: "3 年生"
};

console.log(schoolGrades);
実行結果：{ grade1: '1 年生', grade2: '2 年生', grade3: '3 年生' }

例２：ブラケット記法は、ループと組み合わせることで大量のデータを効率的に作成。
const schoolGrades = {};

for (let i = 1; i <= 6; i++) {
schoolGrades["grade" + i] = `${i}年生`;
}

console.log(schoolGrades);
連番のプロパティ名を簡単に生成。同じパターンのデータをたくさん作るときに便利。
ゲームのレベルや学校の学年など、規則的な名前を使う場合など

変数名とプロパティ名が一致する場合に利用できる省略記法について、具体的なコード例を交えて説明してください。

省略記法とは：ブジェクトを作成する際に、変数名とプロパティ名が同じ場合、
プロパティ名を省略して簡潔に記述することができるらしい。

比較：通常
const name = "Miina";
const age = 22;

const person = {
name: name,
age: age
};

console.log(person);

省略記法
const name = "Miina";
const age = 22;

const person = {
name,
age
};

console.log(person);
「プロパティ名: 変数名」 が同じなら、1 つだけ書けば理解してくれる。
コードが簡潔で読みやすくなり、ミスを防ぐことができる。

知識課題 2
オブジェクトのプロパティにアクセスする際、ドット記法とブラケット記法を使った場合の具体的なコード例を示し、それぞれの使い所や注意点を説明してください。

ドット記法（.）とはオブジェクトのプロパティにアクセスする最もシンプルな方法。
プロパティ名が シンプルな名前（スペースや記号がない場合）に使用。
通常のプロパティへのアクセスは、ドット記法が直感的で読みやすい。
注意点：スペースや記号が含まれるプロパティ名には使えない。

ブラケット記法（[]）
ブラケット記法は、プロパティ名を文字列として指定する方法。
変数を使って動的にプロパティにアクセスしたいときに便利。どんな名前でもアクセス可能だが、複雑なプロパティ名が多い場合に可読性は低い。
注意点：必ず文字列（””）を使う必要がある。

比較：
const person = {
name: "Miina",
age: 22,
isStudent: false
};

ドット記法：
console.log(person.name);
console.log(person.age);

ブラケット記法：
console.log(person[" name"]);  
console.log(user[" age"]);

Optional chaining 演算子 (?。)を利用した安全なプロパティアクセス方法について、実例を交えながらその動作やメリットを解説してください。

（Optional Chaining（オプショナルチェイニング） 演算子（?.）とは
存在しないプロパティにアクセスしたときにエラーを防ぐための方法。
通常、オブジェクトの深い階層のプロパティにアクセスしようとすると、
その途中のプロパティが undefined または null だった場合、エラーが発生する。
Optional Chaining を使うと、これを安全にアクセスできるようになる。）

どっちもこれ使う
const user = {
name: "Miina",
profile: {
age: 22
}
};

通常のエラー：
console.log(user.profile.age); ⚪︎22 と出る。
console.log(user.address.city); × エラー
存在しないプロパティにアクセスするとエラーが発生。
エラーメッセージ:Uncaught TypeError: Cannot read property 'city' of undefined

演算子(オブジェクト?.プロパティ)で使う
?. を使用すると、存在しないプロパティにアクセスしてもエラーにならず、undefined を返すことでプログラムの安全性が向上。
ネストされたプロパティや関数呼び出し、配列アクセスでも活用でき、コードが簡潔で読みやすくなるみたい。

console.log(user.profile?.age); ⚪︎22 と出る。
console.log(user.address?.city); undefined(アンデファインド)と出る （エラーにならない）

オブジェクトの分割代入（Destructuring Assignment）の基本的な使い方と、ネストされたオブジェクトから必要な値を取り出す方法について、具体的なコード例を示して説明してください。

オブジェクトの分割代入とは：オブジェクトのプロパティから特定の値を直接変数に取り出す方法。
通常の方法よりもコードが簡潔になり、読みやすくなる。

使い方：const { name, age, city } = person;
通常だと 1 つずつ定義するものを、{}の中にぎゅっと入れる。

ネストされたオブジェクトから必要な値を取り出す方法
通常
const person = {
name: "Miina",
age: 22,
city: "Hokkaido"
};

const name = person.name;
const age = person.age;
const city = person.city;

console.log(name);  
console.log(age);
console.log(city);

オブジェクトの分割代入（Destructuring Assignment）
const person = {
name: "Miina",
age: 22,
city: "Hokkaido"
};

const { name, age, city } = person;

console.log(name);  
console.log(age);  
console.log(city);

知識課題 3
const で定義されたオブジェクトが変更可能な理由を踏まえ、プロパティの追加方法を直接追加する方法と Computed Property Names を利用する方法の両面から、具体例を交えて説明してください.

const で定義されたオブジェクトが変更可能な理由：
const は変数の「参照」を固定するが、オブジェクトの中身（プロパティ）は変更できる。
const は再代入はできないが、オブジェクトのプロパティの追加・変更・削除は可能。

直接プロパティを追加する方法：ドット記法（.） または ブラケット記法（[]） を使用する。

Computed Property Names（コンピューテッド・プロパティ・ネームズ）を利用する方法：
Computed Property Names とは：オブジェクトのプロパティ名を変数や計算結果で動的（計算して）に決める方法！通常のオブジェクトでは プロパティ名を固定するが、Computed Property Names を使うと、変数や計算式を使って動的にプロパティ名を作成できる。

"ここの部分理解が少ないので、後ほど確認"

オブジェクトからプロパティを削除する際の delete 演算子の使い方、削除後の挙動および注意点について、具体例を交えて考察してください。

delete 演算子とは：オブジェクトの特定のプロパティを完全に削除する演算子。
削除されたプロパティは完全に消える。(undefined を代入するだけでは、プロパティ自体は残る。）
const で宣言されたオブジェクトでも プロパティは削除できる。

delete 演算子の使い方：
const person = {
name: "Miina",
age: 22,
city: "Hokkaido"
};

delete person.age; // このプロパティを削除する

console.log(person);
//　この状態で console.log すると{ name: "Miina", city: "Tokyo" }で age が消えている
console.log(person.age); と指定しても undefined と出る。

注意点：const で宣言していてもプロパティの削除は OK だが、オブジェクト自体の再代入は NG。
delete はオブジェクトのプロパティにしか使えない。
配列の要素を削除できるが、空のスロットができてバグの原因になる。

Object.freeze メソッドを利用してオブジェクトのプロパティの追加・変更・削除を防止する方法と、その使用上の注意点について、実際のコード例を用いて解説してください.

Object.freeze メソッドとは：プロパティの追加・変更・削除をすべて変更できないようにするメソッド。
一度 freeze() したオブジェクトは完全に固定され、編集できなくなる。
セキュリティを強化したり、重要な設定オブジェクトを保護するために使用。

const user = {
name: "Miina",
age: 22
};

// オブジェクトを変更禁止
Object.freeze(user);

// 変更が禁止されるため、すべての操作が無視される
user.age = 25; // 変更不可（エラーにはならないが反映されない）
delete user.name; // 削除不可
user.city = "Hokkaido"; // 追加不可

console.log(user);
// { name: "Miina", age: 22 }（変更が反映されていない）

in 演算子/Object.hasOwn/Object.prototype.hasOwnProperty を用いたプロパティの存在確認方法について、それぞれの特徴や使い分けを、具体例とともに説明してください.

in 演算子とは：対象のオブジェクトに、指定したプロパティがあるかどうかを確認する演算子。
console.log("プロパティ名" in オブジェクト);

Object.hasOwn(オブジェクト・ハズ・オウン)オブジェクト自身が直接持つプロパティのみを判定するメソッド。（プロトタイプのプロパティは無視する）

Object.prototype.hasOwnProperty（オブジェクト・プロトタイプ・ハズ・オウン・プロパティ）：オブジェクトが直接持つプロパティのみを判定するメソッド（プロトタイプのプロパティは無視）。(名前が長いので、実際には hasOwnProperty() とだけ呼ぶことが多い)

各特徴
in 演算子：オブジェクト自身 だけでなく、継承されたプロパティ（プロトタイプチェーン上のプロパティ） もチェック。undefined のプロパティも判定できる（値が undefined でも true になる）。

Object.hasOwn：in 演算子とは違い、継承されたプロパティをチェックしない（自身が持つプロパティのみ判定）null や undefined のオブジェクトでもエラーを防げる。ES2022 以降の新しいメソッド で、安全にプロパティの存在を確認できる。
（ES2022 とは：ECMAScript 2022 の略で、JavaScript の仕様を定める標準規格で、2022 年に正式リリースされた JavaScript の仕様）

hasOwnProperty：in 演算子とは違い、自身が持つプロパティのみ判定するので、継承されたプロパティをチェックしない。（自身が持つプロパティのみ判定）。
null や undefined のオブジェクトに対してはエラーになる。

使い分け
in 演算子：オブジェクトにあるプロパティすべてをチェックしたい時
Object.hasOwn：ES2022 以降の推奨方法！オブジェクト自身のプロパティのみチェックしたい時
hasOwnProperty：古い環境（ES2022 未満）で、オブジェクト自身のプロパティをチェックしたい時

知識課題 4
Object.keys/Object.values/Object.entries を使用して、オブジェクトのキー/値/キーと値の組み合わせを取得する方法を、具体的なコード例を交えて説明してください。

それぞれ何？：オブジェクトのデータを配列として取得するためのメソッドで、オブジェクトの キー（プロパティ名）、値（プロパティの中身）、キーと値のセット を取得できる。

Object.keys（キーズ）：取得するもの：キー（プロパティ名）/戻り値の形式：配列（Array）
Object.values（バリューズ）：取得するもの：値（プロパティの中身）/戻り値の形式：配列（Array）
Object.entries（エントリーズ)：取得するもの：キーと値のペア/戻り値の形式：配列（Array of Arrays）

const person = {
name: "Miina",
age: 22,
city: "Hokkaido"
};

//キー（プロパティ名）の取得
console.log(Object.keys(person));  
// 出力: ["name", "age", "city"]

// 値（プロパティの中身）の取得
console.log(Object.values(person));
// 出力: ["Miina", 22, "Tokyo"]

// キーと値のペアを取得
console.log(Object.entries(person));  
// 出力: [["name", "Miina"], ["age", 22], ["city", "Tokyo"]]

オブジェクトのプロパティ（キー）の反復処理に使用される for...in 文の基本構文について、具体例を用いて説明してください。

for...in 文とは:オブジェクトのプロパティ（キー）を繰り返し処理するためのループ。反復処理
基本の書き方
for (let 変数 in オブジェクト) {
// 各プロパティの処理
}

具体例：
const fruit = {
apple: "りんご",
banana: "バナナ",
grape: "ぶどう"
};

for (let key in fruit) {
console.log(key + " は " + fruit[key] + " です");
}

結果：
apple は りんご です
banana は バナナ です
grape は ぶどう です

key には "apple", "banana", "grape" が順番に入る
fruit[key] で、それぞれの値 "りんご", "バナナ", "ぶどう" を取得できる。

Object.assign を利用して複数のオブジェクトをマージしたり、オブジェクトを複製する方法について、具体的なコード例を交えて説明してください。

Object.assign()(アサイン) とは複数のオブジェクトをマージ（結合）したり、オブジェクトをコピー（複製） するためのメソッド。

基本構文：
Object.assign(ターゲットオブジェクト, ソースオブジェクト 1, ソースオブジェクト 2, ...);
ターゲットオブジェクト → ここにマージされた結果が入る
ソースオブジェクト 1, ソースオブジェクト 2, ... → これらのオブジェクトの内容がターゲットオブジェクトにコピーされる。

マージ
const obj1 = { a: 1, b: 2 };
const obj2 = { b: 3, c: 4 };

const mergedObj = Object.assign({}, obj1, obj2);

console.log(mergedObj);

出力結果
{ a: 1, b: 3, c: 4 }
obj1 と obj2 のプロパティをマージ
b の値は obj2 の b:3 で上書きされる。
空の {} をターゲットにすることで、元の obj1 や obj2 は変更されない。

コピー：
const original = { name: "Miina", age: 22 };

// `Object.assign()` で新しいオブジェクトを作成（クローン）
const clone = Object.assign({}, original);
({}（空のオブジェクト）を最初の引数にしている → ここに original の内容をコピーする)

console.log(clone);
出力結果: { name: "Miina", age: 22 }

console.log(clone === original);
出力結果:false（別のオブジェクトになっている）
なぜ false？
新しいオブジェクト {} にプロパティをコピーしていて、同じデータだけど、original とは別のオブジェクト。JavaScript ではオブジェクト同士を === で比較すると、同じオブジェクトを参照している場合のみ true になるから。

スプレッド構文を利用して、オブジェクトのプロパティを展開・マージする例を具体的なコード例を交えて説明してください.

スプレッド構文 (...) ：オブジェクトのプロパティを展開・マージすることができる。
Object.assign() よりも簡潔に書ける
const person = { name: "Miina", age: 22 };
const clone = { ...person };
// person のプロパティをすべて展開して新しいオブジェクトを作成

console.log(clone);
結果：{ name: "Miina", age: 22 }

マージ方法：
const obj1 = { a: 1, b: 2 };
const obj2 = { b: 3, c: 4 };

const mergedObj = { ...obj1, ...obj2 };

console.log(mergedObj);
結果: { a: 1, b: 3, c: 4 }
後から展開した obj2 が優先され、b: 2 が b: 3 に上書きされる
