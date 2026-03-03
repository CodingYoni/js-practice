// Day 10 – JSON Practice

// 1️⃣ JSON string (simulating incoming backend request)
const incoming = '{"user":{"name":"Anna","role":"admin","skills":["JS","Node","SQL"],"active":true}}';

// 2️⃣ Parse JSON → JavaScript object
const data = JSON.parse(incoming);

// 3️⃣ Access nested data
console.log("User name:", data.user.name);
console.log("Third skill:", data.user.skills[2]);

// 4️⃣ Backend-style condition check
if (data.user.role === "admin" && data.user.active) {
    console.log("Access granted");
} else {
    console.log("Access denied");
}

// 5️⃣ Convert object back to JSON (simulate sending response)
const response = JSON.stringify(data, null, 2);
console.log("Response JSON:");
console.log(response);