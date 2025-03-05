console.log("------------知識課題1------------");
console.log(
  "こんにちは！\tお昼のニュースをお伝えします。\n研修生のみいなさんは\"JavaScript\" の勉強をしており。彼女は'難しいですが楽しいです。'と発言していたことが判明しました。"
);
console.log("------------知識課題2------------");
const str = "JavaScript";
console.log(str[0]);
console.log(str.at(0));
console.log("------------知識課題3------------");
const csv = "apple,banana,cherry";
const fruits = csv.split(","); // これで配列に変換してる

const mFruits = fruits.map((fruit) => "fruit: " + fruit); // map使うんだぁ、、、、

const result = mFruits.join(", "); // 文字列に戻す

console.log(result);

console.log("------------知識課題4------------");
const text = "子持ち ししゃも!";
console.log(text.length);
const tex = "";
console.log(tex.length);

console.log("------------知識課題5------------");
const str1 = "JavaScript is fun!";
console.log(str1.slice(0, 11));
console.log(str1.substring(10));

console.log("------------知識課題6------------");
const str2 = "I love JavaScript and JavaScript loves me.";
console.log(str2.indexOf("JavaScript"));
console.log(str2.lastIndexOf("JavaScript"));
console.log(str2.startsWith("I love"));
console.log(str2.endsWith("me."));
console.log(str2.includes("and"));

console.log("------------知識課題7------------");
const str3 = "I like cats. Cats are very cute. I have a cat.";

console.log(str3.replace("cat", "dog"));
console.log(str3.replaceAll("cat", "dog"));
