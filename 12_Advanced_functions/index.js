// 1. first type of function
// function add(a, b) {
//     return a + b;
// }

// console.log(add(5, 3)); // 8  this called function invocation, we are invoking the function add with arguments 5 and 3, and it returns the result 8.

// 2. second type of function
// const subtract = function (a, b) {
//     return a - b;
// } 

// console.log(subtract(10, 4)); // 6 this is another way to define a function, we are assigning an anonymous function to the variable subtract, and then we can call it using the variable name.

// // 3. third type of function
// const multiply = (a, b) => {
//     return a * b;
// } 

// console.log(multiply(6, 7)); // 42 this is an arrow function, which is a more concise way to write functions in JavaScript. It uses the => syntax and can omit the return statement if the function body is a single expression.

// // 4. fourth type of function
// const divide = (a, b) => a / b;
// console.log(divide(20, 5)); // 4 this is another arrow function, but since the function body is a single expression, we can omit the curly braces and the return statement.


// // 5. seventh type of function
// const square = a => a ** 2;

// console.log(square(5)); // 25 this is an arrow function with a single parameter, we can omit the parentheses around the parameter when there is only one.


// // passing functions as arguments
// function operate(a, b, operation) {
//     return operation(a, b);
// }
// console.log(operate(10, 5, add)); // 15 we are passing the add function as an argument to the operate function, and it will call the add function with the arguments 10 and 5.

// console.log(operate(10, 5, subtract)); // 5 we are passing the subtract function as an argument to the operate function, and it will call the subtract function with the arguments 10 and 5.





// callback functions
// function greet(name) {
//     return name();

// }
// console.log(greet(() => "Alice"));  // this is callback functions right




// setTimeout example
// setTimeout(() => {
//     console.log("This message is displayed after 2 seconds");
// }, 2000);


// setInterval example

// let count = 0;
// const intervalId = setInterval(() => {
//     count++;  
//     console.log(`Count: ${count}`);
//     if (count >= 5) {
//         clearInterval(intervalId); // Stop the interval after 5 counts
//     }
// }, 1000);


// console.log("hello world");     
    // this will be printed immediately, while the setTimeout and setInterval will run asynchronously.  


    
// function res(){

//   let user=[
//     {name:"John", age: 30},
//     {name:"Jane", age: 25},
//     {name:"Doe", age: 35}
//   ]

//   for(let i=0; i<user.length; i++){
//     if(user[i].age>=30){
//   console.log(user[i].name + " is " + user[i].age + " years old." );
//     }
    
//   }



// }
// res()


//  let users=[
//     {name:"John", age: 30},
//     {name:"Jane", age: 25},
//     {name:"Doe", age: 35}
//   ]


// users.forEach((user) => {
//   console.log(user.name, user.age);
// }) 



// advance functions arrow functions

// arrow functions types

 // 1. simple arrow function
// const add = (a, b) => a + b;
// console.log(add(5, 3)); // 8

// 2. arrow function with multiple statements
// const subtract = (a, b) => {
//     const result = a - b;
//     return result;
// }
// console.log(subtract(10, 4)); // 6

// // 3. arrow function with no parameters
// const greet = () => "Hello, World!";
// console.log(greet()); // "Hello, World!"

// // 4. arrow function with one parameter
// const square = x => x ** 2;
// console.log(square(5)); // 25

// // 5. arrow function with default parameters
// const multiply = (a, b = 1) => a * b;
// console.log(multiply(6));




// addevent functions in DOM manipulation

let res= document.querySelector(".js-changetext");

let result=()=>{
    res.innerHTML = "Loading...";
    setTimeout(() => {
      res.innerHTML = "Successfully Updated";
      console.log("Text updated successfully");
    }, 1000);
}


res.addEventListener("click", result);

// res.removeEventListener("click", result);




// testing innerHTML and innerText
let demo = document.getElementById("demo");
// demo.innerHTML = "<p>This is a paragraph.</p>"; 
// demo.innerText = "<p>This is a paragraph.</p>"; 
demo.textContent = "<p>This is a paragraph.</p>";
// This will render the HTML content
// demo.innerText = "<p>This is a paragraph.</p>"; // This will display the text as it is, without rendering HTML tags

// console.log(demo.innerHTML); // Output: <p>This is a paragraph.</p>
// console.log(demo.innerText); // Output: This is a paragraph.