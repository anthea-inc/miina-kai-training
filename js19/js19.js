const jsonStr = '{"title": "JSON入門", "level": "初級", "completed": false}';
//一番最初JSONの構文だけで動くかと思ったけど、やっぱりconstとか必要だよね

const obj = JSON.parse(jsonStr); // JSON文字列 → JavaScriptオブジェクト
console.log(obj);

obj.completed = true; // プロパティの変更と追加
obj.reviewed = "2025-03-29";

const updatedJsonStr = JSON.stringify(obj); // オブジェクト → JSON文字列に戻す

console.log(updatedJsonStr);
