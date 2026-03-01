// Day 7 — Object Processing with For Loops

let users = [
  { name: "Tom", age: 17 },
  { name: "Lisa", age: 21 },
  { name: "James", age: 18 },
  { name: "Anna", age: 25 }
];

// Find oldest user
let oldest = users[0];

for(let i = 0; i < users.length; i++){
    if(users[i].age > oldest.age){
        oldest = users[i];
    }
}

console.log("Oldest user:", oldest.name);


// Store adult users
let adults = [];

for(let i = 0; i < users.length; i++){
    if(users[i].age >= 18){
        adults.push(users[i]);
    }
}

console.log("Adult users:", adults);


// Store minor names
let minors = [];

for(let i = 0; i < users.length; i++){
    if(users[i].age < 18){
        minors.push(users[i].name);
    }
}

console.log("Minor names:", minors);