let users = [
  { name: "John", age: 17 },
  { name: "Sarah", age: 22 },
  { name: "Mike", age: 19 }
];

let result = users
.filter(user => user.age>=18)
.map(user => user.name);

console.log(result);