// =============================
// Function Declarations in JavaScript
// =============================
// A function is a block of code designed to perform a task.
// Functions allow us to reuse code, make it modular, and keep it organized.

// ---------------------------------------------------
// 1. Basic Function Declaration
// ---------------------------------------------------
// Syntax:
// function functionName(parameters) {
//   // code to execute
//   return value;
// }

function greet() {
  console.log("Hello, World!");
}
greet(); // Call the function
console.log("------------------------------");

// ---------------------------------------------------
// 2. Function with Parameters
// ---------------------------------------------------
function add(a, b) {
  return a + b;
}
console.log("add(2, 3):", add(2, 3));
console.log("add(10, 5):", add(10, 5));
console.log("------------------------------");

// ---------------------------------------------------
// 3. Function with Return Value
// ---------------------------------------------------
function multiply(x, y) {
  let result = x * y;
  return result;
}
let product = multiply(4, 5);
console.log("multiply(4, 5):", product);
console.log("------------------------------");

// ---------------------------------------------------
// 4. Default Parameters (ES6)
// ---------------------------------------------------
function greetUser(name = "Guest") {
  return "Hello, " + name + "!";
}
console.log(greetUser("Alice"));
console.log(greetUser()); // uses default value
console.log("------------------------------");

// ---------------------------------------------------
// 5. Function Scope
// ---------------------------------------------------
// Variables defined inside a function are not accessible outside.
function showScope() {
  let localVar = "I am local";
  console.log(localVar); // accessible here
}
showScope();
// console.log(localVar); // ❌ ReferenceError
console.log("------------------------------");

// ---------------------------------------------------
// 6. Function Hoisting
// ---------------------------------------------------
// Function declarations are hoisted (moved to the top of scope).
// This means you can call them before they are defined.

sayHello(); // Works even before definition
function sayHello() {
  console.log("Hello from hoisted function!");
}
console.log("------------------------------");

// ---------------------------------------------------
// 7. Best Practices
// ---------------------------------------------------
// - Use descriptive names for functions (e.g., calculateTotal, getUser).
// - Keep functions small and focused on a single task.
// - Prefer function declarations when you want hoisting.
// - Use arrow functions for shorter callbacks or inline logic.

// ---------------------------------------------------
// 8. Summary
// ---------------------------------------------------
console.log("=== Function Declarations Summary ===");
console.log(
  "function name(params) { ... } -> defines a reusable block of code"
);
console.log("Can have parameters and return values");
console.log("Supports default parameters (ES6)");
console.log("Variables inside functions have local scope");
console.log("Function declarations are hoisted");
console.log("Use for reusable, named functions");
