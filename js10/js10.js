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
const hasEigyo = employees.some((employee) => employee.department === "営業");
console.log(hasEigyo); // 直ってない？
console.log("-----------------実践課題5-1-------------------");
employees.push(pushEmployee); //
console.log(employees);

console.log("-----------------実践課題5-2-------------------");
employees.pop();
console.log(employees);

console.log("-----------------実践課題5-3-------------------");
employees.unshift(unshiftEmployee); //
console.log(employees);

console.log("-----------------実践課題5-4-------------------");
employees.shift();
console.log(employees);

console.log("-----------------実践課題5-5-------------------");
const kobayashi = employees.concat(newEmployees); // concatメソッド
console.log(kobayashi);

console.log("------");

const koba = [...employees, ...newEmployees]; // スプレッド構文（...）
console.log(koba);

console.log("-----------------実践課題5-6-------------------");
employees.splice(2, 1);
console.log(employees);

console.log("-----------------実践課題5-7-------------------");
const copyArray = [...employees];
console.log(copyArray);
copyArray.length = 0;
console.log(copyArray);

console.log("------");
let copy2Array = [...employees]; // constは再代入できないが、letはできる。
console.log(copy2Array);
copy2Array = [];
console.log(copy2Array);

console.log("-----------------実践課題6-------------------");
const abc = employees.map((employees) => employees.projects).flat(); // mapはemployeeのprojectsを取り出し、新しい配列を作る
console.log(abc);

console.log("-----------------実践課題7-1-------------------");

employees.forEach((employee) => {
  console.log(`社員名: ${employee.name}`);
});

console.log("-----------------実践課題7-2-------------------");
const mapNames = employees.map((employee) => employee.name);
console.log(mapNames);

console.log("-----------------実践課題7-3-------------------");

const Departments = employees.filter(
  (employee) => employee.department === "企画"
);
console.log(Departments);
console.log("-----------------実践課題7-4-------------------");

const total = employees.reduce((sum, employee) => sum + employee.age, 0);

const average = total / employees.length;

console.log(average);

console.log("-----------------実践課題7-5-------------------");
const sorts = [...employees].sort((a, b) => b.age - a.age); // 降順にしている
console.log(sorts);

console.log("-----------------実践課題8-1-------------------");

const groupedByDepartment = employees.reduce((acc, employee) => {
  // もし `acc`（蓄積オブジェクト）に部署がなければ、新しい配列を作るみたい
  if (!acc[employee.department]) {
    acc[employee.department] = [];
  }
  acc[employee.department].push(employee); // 部署ごとの配列に社員を追加

  return acc;
}, {}); // 初期値にする `{}`（空のオブジェクト）
console.log(groupedByDepartment); // 自力でやっても無理だった

console.log("-----------------実践課題8-2-------------------");
const result = employees
  .filter((employee) => employee.department === "営業")
  .sort((a, b) => a.age - b.age)
  .map((employee) => employee.name);

console.log(result); // 営業1人しかいない
