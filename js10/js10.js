const people = [
  { name: "Miina", age: 22 },
  { name: "Pain", age: 25 },
  { name: "Kai", age: 22 },
  { name: "Taro", age: 36 },
];

// `age` を基準にグループ化する関数
const groupByAge = people.reduce((result, person) => {
  const key = person.age; // グループのキー（age）
  if (!result[key]) {
    result[key] = []; // まだグループがなければ作る
  }
  result[key].push(person); // グループに追加
  return result;
}, {});

console.log(groupByAge);
