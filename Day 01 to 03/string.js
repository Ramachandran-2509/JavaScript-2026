// string concept in JavaScript

// string is a data type that is used to store text. It is a sequence of characters that are enclosed in single quotes, double quotes, or backticks.

// string can be created using single quotes, double quotes, or backticks.

// concept of string concatenation
// let firstName = "John";
// let lastName = "Doe";
// let fullName = firstName + " " + lastName;
// console.log(fullName) // John Doe


// concept of string coercion
// let a = "10";
// let b = 20;
// let c = a + b;
// console.log(c) // 1020


// order summary using string interpolation

// let res= 'Items (' + (1+1) + '): $' + (2095+1899+799+499)/100
// console.log(res) // Items (2): $53.92



// 3 ways  create string

// 1. using single quotes
// let str1 = 'Hello, World!';
// console.log(str1) // Hello, World!

// 2. using double quotes
// let str2 = "Hello, World!";
// console.log(str2) // Hello, World!

// 3. using backticks // template literals
// let str3 = `Hello, World!`;
// console.log(str3) // Hello, World!


// string interpolation

// console.log(`Item ${1+1}: $${(2095+1899+799+499)/100}`) // Item 2: $53.92


// Task
// let price1 =(2095+2095+799+799)/100
// console.log(`Item ${1+1+1+1}: $${price1}`) // Item 4: $57.88


// let shipping = (499+499)/100
// console.log(`Shipping & handling: $${shipping}`) // Shipping & handling: $9.98


// console.log(`Total Before Tax: $${price1+shipping}`)

// let p= Math.round((2095+2095+799+799+499+499)*0.1)/100
// console.log(`Estimated Tax ${10}%: $${p}`)

// console.log(`Order total : $${p+price1+shipping}`) // Order total : $68.86

// console.log(`Total Cost : $${p+price1+shipping}
// Thank you, Come Again!
// `) // Total Cost : $63.67

// console.log(`Total Cost : $${(599+295)/100}
// Thank you, Come Again!
// `) // Item 2: $53.92