
let users = [
  { name: "John", age: 20, city: "London" },
  { name: "Sarah", age: 16, city: "Manchester" },
  { name: "Mike", age: 22, city: "Bristol" },
  { name: "Emma", age: 19, city: "Leeds" }
];


// 1. Print all users
console.log("All users:");
users.forEach(user => {
  console.log(user.name, user.age, user.city);
});


// 2. Get adult users
let adults = users.filter(user => user.age >= 18);
console.log("\nAdult users:");
console.log(adults);


// 3. Get adult names
let adultNames = users
  .filter(user => user.age >= 18)
  .map(user => user.name);

console.log("\nAdult names:");
console.log(adultNames);


// 4. Get adult cities
let adultCities = users
  .filter(user => user.age >= 18)
  .map(user => user.city);

console.log("\nAdult cities:");
console.log(adultCities);


// 5. Function version
function printAdultCities(users) {
  console.log("\nAdult cities from function:");
  
  users
    .filter(user => user.age >= 18)
    .forEach(user => console.log(user.city));
}

printAdultCities(users);