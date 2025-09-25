// =============================
// Function Expressions in JavaScript
// =============================
// A function expression means creating a function inside an expression
// and assigning it to a variable.
// Functions can be anonymous or named.

// ---------------------------------------------------
// 1. Basic Function Expression
// ---------------------------------------------------
const greet = function () {
  console.log("Hello from function expression!");
};
greet(); // Call the function
console.log("------------------------------");

// ---------------------------------------------------
// 2. Anonymous Function Expression
// ---------------------------------------------------
const add = function (a, b) {
  return a + b;
};
console.log("add(2, 3):", add(2, 3));
console.log("------------------------------");

// ---------------------------------------------------
// 3. Named Function Expression
// ---------------------------------------------------
// Gives the function a name (useful for debugging).
const multiply = function multiplyNumbers(x, y) {
  return x * y;
};
console.log("multiply(4, 5):", multiply(4, 5));
// console.log(multiplyNumbers(4, 5)); // ❌ Error outside, name is only local
console.log("------------------------------");

// ---------------------------------------------------
// 4. Function Expression with Parameters and Return
// ---------------------------------------------------
const square = function (num) {
  return num * num;
};
console.log("square(6):", square(6));
console.log("------------------------------");

// ---------------------------------------------------
// 5. Difference: Function Declarations vs Expressions
// ---------------------------------------------------
// Function declarations are hoisted -> can call before definition.
// Function expressions are NOT hoisted -> must be defined before use.

try {
  sayHello(); // ❌ Error: Cannot access 'sayHello' before initialization
} catch (err) {
  console.log("Error:", err.message);
}

const sayHello = function () {
  console.log("Hello (function expression)!");
};
sayHello();
console.log("------------------------------");

// ---------------------------------------------------
// 6. Function Expressions as Callbacks
// ---------------------------------------------------
// Commonly used in setTimeout, array methods, event handlers, etc.

setTimeout(function () {
  console.log("This runs after 1 second (callback).");
}, 1000);

const numbers = [1, 2, 3, 4];
const doubled = numbers.map(function (num) {
  return num * 2;
});
console.log("Doubled array using map + function expression:", doubled);
console.log("------------------------------");

// ---------------------------------------------------
// 7. Best Practices
// ---------------------------------------------------
// - Use function expressions for inline or callback functions.
// - Named function expressions help debugging.
// - Remember they are not hoisted, so define before using.
// - Use arrow functions when you want shorter syntax and lexical 'this'.

// ---------------------------------------------------
// 8. Summary
// ---------------------------------------------------
console.log("=== Function Expressions Summary ===");
console.log("const fn = function (...) { ... } -> function expression");
console.log("Can be anonymous or named");
console.log("Not hoisted -> must be defined before calling");
console.log("Useful for callbacks, passing as arguments");
console.log("Function name (if given) is only visible inside function body");
