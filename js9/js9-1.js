const id = 8;
const namae = "Miina";

const person = {
  id,
  namae,
  "job-title": "software Engineer",
  "birth date": "2002-08-18",
  address: {
    city: "Hokkaido",
    country: "Japan",
  },
};

console.log("-----------ステップ2-1--------------");

console.log(person.name);
console.log(person.address.city);

console.log("-----------ステップ2-2--------------");

console.log(person["birth date"]);
console.log(person["job-title"]);

console.log("-----------ステップ2-3--------------");

console.log(person?.from);
console.log(person.address?.phone);

console.log("-----------ステップ2-4--------------");

const newPropKey = "hobby";
const newPropValue = 5;

person[newPropKey] = newPropValue;
console.log(person);

console.log("-----------ステップ3-1--------------");
person.namae = "Kai";

console.log(person);

console.log("-----------ステップ3-2--------------");

delete person["birth date"];
console.log(person["birth date"]);

console.log("-----------ステップ3-3--------------");

const frozenPerson = {
  food: "Sushi",
  Number: 317,
  country: "Japan",
};

Object.freeze(frozenPerson);

frozenPerson.food = "Ramen";
console.log(frozenPerson);

console.log("-----------ステップ3-4--------------");

console.log("id" in person); // in 演算子

console.log(Object.hasOwn(person, "id")); // Object.hasOwn

console.log(person.hasOwnProperty("id")); // Object.prototype.hasOwnProperty

console.log("-----------ステップ4-1--------------");

console.log(Object.keys(frozenPerson));
console.log(Object.values(frozenPerson));
console.log(Object.entries(frozenPerson));

console.log("-----------ステップ4-2--------------");

const fruit = {
  apple: "りんご",
  banana: "バナナ",
  grape: "ぶどう",
};

for (let key in fruit) {
  console.log(key + " は " + fruit[key] + " です");
}

console.log("-----------ステップ4-3.4--------------");

const additionalInfo = {
  nationality: "Japanese",
  age: 35,
};

const newObject = Object.assign({}, person, additionalInfo);
console.log(newObject);

console.log("-----------ステップ4-5--------------");
const newPerson = { ...person };
console.log(newPerson);
