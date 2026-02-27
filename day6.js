// Day 6 — For Loops Practice

let nums = [5,12,8,20,3];

let result = [];

for(let i = 0; i < nums.length; i++){
    if(nums[i] > 10){
        result.push(nums[i]);
    }
}

console.log("Numbers greater than 10:", result);


// Sum example
let nums2 = [5,10,15];
let sum = 0;

for(let i = 0; i < nums2.length; i++){
    sum = sum + nums2[i];
}

console.log("Sum:", sum);


// Largest number example
let nums3 = [5,12,3,20,8];
let largest = nums3[0];

for(let i = 0; i < nums3.length; i++){
    if(nums3[i] > largest){
        largest = nums3[i];
    }
}

console.log("Largest:", largest);