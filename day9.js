// Day 9 – Reduce Exercises & Backend Patterns

// 1️⃣ Sum Only Even Numbers
const nums1 = [1, 2, 3, 4, 5, 6];
const sumEvens = nums1.reduce((acc, num) => {
  if (num % 2 === 0) {
    return acc + num;
  }
  return acc;
}, 0);
console.log("Sum of even numbers:", sumEvens); // 12

// 2️⃣ Count occurrences of "hi"
const words = ["hi", "hello", "hi", "bye", "hi"];
const hiCount = words.reduce((acc, word) => {
  if (word === "hi") acc += 1;
  return acc;
}, 0);
console.log('"hi" count:', hiCount); // 3

// 3️⃣ Double each number in array
const nums2 = [1, 2, 3, 4];
const doubled = nums2.reduce((acc, num) => {
  acc.push(num * 2);
  return acc;
}, []);
console.log("Doubled numbers:", doubled); // [2,4,6,8]

// 4️⃣ Find largest number
const nums3 = [5, 12, 8, 20, 3];
const maxNum = nums3.reduce((acc, num) => {
  return num > acc ? num : acc;
}, nums3[0]);
console.log("Largest number:", maxNum); // 20

// 5️⃣ Total price in cart
const cart = [
  { item: "Book", price: 10 },
  { item: "Pen", price: 2 },
  { item: "Laptop", price: 1000 }
];
const totalPrice = cart.reduce((acc, item) => acc + item.price, 0);
console.log("Total cart price:", totalPrice); // 1012

// 6️⃣ Build ID lookup object (dynamic keys)
const users = [
  { id: 1, name: "Anna" },
  { id: 2, name: "Tom" },
  { id: 3, name: "Lisa" }
];
const userLookup = users.reduce((acc, user) => {
  acc[user.id] = user.name; // dynamic key
  return acc;
}, {});
console.log("User lookup:", userLookup); // {1: "Anna", 2: "Tom", 3: "Lisa"}
