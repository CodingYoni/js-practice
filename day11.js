let users = [
  { name: "Tom", age: 17, active: true },
  { name: "Lisa", age: 21, active: false },
  { name: "James", age: 18, active: true },
  { name: "Anna", age: 25, active: true }
];

// 1️⃣ Get names of active users
function getActiveUserNames(users){
  return users
    .filter(user => user.active)
    .map(user => user.name);
}

console.log(getActiveUserNames(users));


// 2️⃣ Get average age of active users
function getAverageAge(users){

  let activeUsers = users.filter(user => user.active);

  let totalAge = activeUsers.reduce((acc,user) => acc + user.age,0);

  return totalAge / activeUsers.length;
}

console.log(getAverageAge(users));


// 3️⃣ Get total users and active users count
function getUserStats(users){

  return {
    totalUsers: users.length,
    activeUsers: users.filter(user => user.active).length
  };

}

console.log(getUserStats(users));