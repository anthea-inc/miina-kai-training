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

console.log(person.name);
console.log(person.address.city);

console.log(person["birth date"]);
console.log(person["job-title"]);

console.log(person?.from);
console.log(person.address?.phone);

const newPropKey = "hobby";
const newPropValue = 5;

person[newPropKey] = newPropValue;
console.log(person);

person.namae = "Kai";

console.log(person);
