// Arrow function
let multiply = (a,b) => a * b;

console.log(multiply(5,3));


// map with arrow function
let numbers = [2,4,6];

let doubled = numbers.map(n => n * 2);

console.log(doubled);


// filter with arrow function
let nums = [1,2,3,4,5,6];

let evens = nums.filter(n => n % 2 === 0);

console.log(evens);


// callback example
function processNumbers(numbers, callback){

  for(let i = 0; i < numbers.length; i++){
    console.log(callback(numbers[i]));
  }

}

processNumbers([1,2,3], n => n + 10);


// recreating map()
function applyOperation(numbers, callback){

  let result = [];

  for(let i = 0; i < numbers.length; i++){
    result.push(callback(numbers[i]));
  }

  return result;

}

let output = applyOperation([1,2,3], n => n * 3);

console.log(output);