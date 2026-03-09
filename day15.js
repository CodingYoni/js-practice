// Spread operator with arrays
let numbers = [5,10,15];

let copy = [...numbers];

console.log(numbers);
console.log(copy);


// Merge arrays
let arr1 = [1,2];
let arr2 = [3,4];

let merged = [...arr1, ...arr2];

console.log(merged);


// Spread with objects
let user = { name: "Lisa" };

let newUser = {...user, age:25};

console.log(newUser);


// Rest operator
function printNumbers(...nums){
  console.log(nums);
}

printNumbers(1,2,3);