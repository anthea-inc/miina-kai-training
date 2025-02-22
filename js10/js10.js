// 社員データ
const employees = [
  {
    id: 1,
    name: "田中太郎",
    age: 30,
    department: "営業",
    projects: ["プロジェクトA", "プロジェクトB"],
  },
  {
    id: 2,
    name: "佐藤花子",
    age: 25,
    department: "企画",
    projects: ["プロジェクトC"],
  },
  { id: 3, name: "鈴木一郎", age: 28, department: "開発", projects: [] },
];

// チームごとの社員IDを管理する2次元配列
const teams = [
  [1, 3], // チームA：田中太郎と鈴木一郎
  [2], // チームB：佐藤花子
];

// 追加する社員の指定

// push により追加する社員
const pushEmployee = {
  id: 4,
  name: "高橋次郎",
  age: 32,
  department: "開発",
  projects: ["プロジェクトD"],
};

// unshift により追加する社員
const unshiftEmployee = {
  id: 5,
  name: "山本花子",
  age: 27,
  department: "企画",
  projects: ["プロジェクトE"],
};

// newEmployees 配列に含める社員（結合用）
const newEmployees = [
  {
    id: 6,
    name: "小林健",
    age: 29,
    department: "営業",
    projects: ["プロジェクトF"],
  },
];

console.log("-----------------実践課題1-1-------------------");
console.log(employees);

console.log("-----------------実践課題1-2-------------------");
console.log(employees[employees.length - 1]);
console.log(employees.at(-1));

console.log("-----------------実践課題1-3-------------------");
console.log(employees[10]);

console.log("-----------------実践課題2-1-------------------");
const { id, name, age, department, projects } = employees[0];
console.log(id);
console.log(name);
console.log(age);
console.log(department);
console.log(projects);

console.log("-----------------実践課題3-1-------------------");
console.log(Array.isArray([employees]));
console.log("ここまだ出来ていない");

console.log("-----------------実践課題3-2-------------------");
const index = employees.id.findIndex((num) => num === 2);

console.log(index);
