// Day 8 — Functions with Arrays of Objects

let users = [
  { name: "Tom", age: 17 },
  { name: "Lisa", age: 21 },
  { name: "James", age: 18 },
  { name: "Anna", age: 25 }
];

// Warm-up 1 — print all names
function printUserNames(users){
    for(let i = 0; i < users.length; i++){
        console.log(users[i].name);
    }
}
printUserNames(users);

// Warm-up 2 — count adults
function countAdults(users){
    let count = 0;
    for(let i = 0; i < users.length; i++){
        if(users[i].age >= 18){
            count++;
        }
    }
    return count;
}
let adultCount = countAdults(users);
console.log(adultCount);

// Warm-up 3 — get adult names
function getAdultNames(users){
    let result = [];
    for(let i = 0; i < users.length; i++){
        if(users[i].age >= 18){
            result.push(users[i].name);
        }
    }
    return result;
}
console.log(getAdultNames(users));

// Main Exercise 1 — find user by name
function findUserByName(users, name){
    for(let i = 0; i < users.length; i++){
        if(users[i].name === name){
            return users[i];
        }
    }
    return null;
}
console.log(findUserByName(users, "Lisa"));
console.log(findUserByName(users, "Bob"));

// Main Exercise 2 — get users above a certain age
function getUsersAboveAge(users, age){
    let result = [];
    for(let i = 0; i < users.length; i++){
        if(users[i].age > age){
            result.push(users[i]);
        }
    }
    return result;
}
console.log(getUsersAboveAge(users, 18));

// Final Exercise — get oldest user name
function getOldestUserName(users){
    let oldest = users[0];
    for(let i = 0; i < users.length; i++){
        if(users[i].age > oldest.age){
            oldest = users[i];
        }
    }
    return oldest.name;
}
console.log(getOldestUserName(users));