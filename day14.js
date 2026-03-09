// Object destructuring
let user = {
  name: "Anna",
  age: 25
};

let {name, age} = user;

console.log(name, age);


// Array destructuring
let numbers = [5, 10, 15];

let [first, second] = numbers;

console.log(first, second);


// Destructuring in loops
let users = [
  { name: "Tom", age: 17 },
  { name: "Lisa", age: 21 }
];

for (let {name, age} of users) {
  console.log(name + " - " + age);
}