// method chaining with numbers
let numbers = [1,2,3,4,5,6];

let result = numbers
  .filter(n => n > 3)
  .map(n => n * 2);

console.log(result);


// working with objects
let users = [
  {name:"Tom", age:17},
  {name:"Lisa", age:21},
  {name:"John", age:25}
];

let names = users
  .filter(user => user.age >= 21)
  .map(user => user.name);

console.log(names);


// price transformation example
let prices = [10,20,30,40];

let updatedPrices = prices
  .map(price => price * 1.2)
  .filter(price => price > 30);

console.log(updatedPrices);