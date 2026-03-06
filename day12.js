let users = [
  { name: "Tom", age: 17, active: true },
  { name: "Lisa", age: 21, active: false },
  { name: "James", age: 18, active: true },
  { name: "Anna", age: 21, active: true }
];

// 1️⃣ Convert array to object with dynamic keys
function usersToObject(users){
    let result = {};
    for(let i = 0; i < users.length; i++){
        result[users[i].name] = users[i].age;
    }
    return result;
}

console.log(usersToObject(users));