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
  {
    id: 3,
    name: "鈴木一郎",
    age: 28,
    department: "開発",
    projects: [],
  },
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

console.log("----実践課題4-1ここまだ出来ていない----");

console.log("-----------------実践課題4-1-------------------");
const index = employees.findIndex((employee) => employee.id === 2);
console.log(index); // 1で正解かな？

console.log("-----------------実践課題4-2-------------------");
const suzuki = employees.find((employees) => employees.name >= "鈴木一郎"); // 上が正解ならこの当てはめ方であっているはず。
console.log(suzuki);

console.log("-----------------実践課題4-3-------------------");
const sliced = employees.slice(0, 2);
console.log(sliced); // これすんなり出来たの嬉しい

console.log("-----------------実践課題4-4-------------------");
const hasEigyo = employees.some((employees) =>
  employees.department.includes("営業")
);
console.log(hasEigyo); // これも知識課題の例題のおかげですんなり出来た

console.log("-----------------実践課題5-1-------------------");
employees.push({ id: 4, name: "高橋次郎" });
console.log(employees);

console.log("-----------------実践課題5-2-------------------");
employees.pop();
console.log(employees);

console.log("-----------------実践課題5-3-------------------");
employees.unshift({ id: 5, name: "山本花子" });
console.log(employees);

console.log("-----------------実践課題5-4-------------------");
