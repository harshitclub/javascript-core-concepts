// =============================
// Higher-Order Functions in JavaScript
// =============================
// A Higher-Order Function (HOF) is a function that:
// 1. Takes another function as an argument (callback), OR
// 2. Returns another function as a result.

// ---------------------------------------------------
// 1. Basic Example: Passing a Function as Argument
// ---------------------------------------------------
function greet(name) {
  return "Hello, " + name + "!";
}

function processUserInput(callback) {
  const name = "Alice";
  console.log(callback(name));
}

processUserInput(greet); // Pass greet as callback
console.log("------------------------------");

// ---------------------------------------------------
// 2. Returning a Function
// ---------------------------------------------------
function multiplier(factor) {
  return function (num) {
    return num * factor;
  };
}

const double = multiplier(2);
const triple = multiplier(3);

console.log("Double 5:", double(5)); // 10
console.log("Triple 5:", triple(5)); // 15
console.log("------------------------------");

// ---------------------------------------------------
// 3. Built-in Higher-Order Functions (Array Methods)
// ---------------------------------------------------
const numbers = [1, 2, 3, 4, 5];

// forEach -> executes a function for each element
console.log("forEach:");
numbers.forEach(function (num) {
  console.log(num);
});
console.log("------------------------------");

// map -> creates a new array by transforming each element
const squares = numbers.map(function (num) {
  return num * num;
});
console.log("map -> squares:", squares);
console.log("------------------------------");

// filter -> creates a new array with elements that pass a test
const evens = numbers.filter(function (num) {
  return num % 2 === 0;
});
console.log("filter -> even numbers:", evens);
console.log("------------------------------");

// reduce -> reduces array to a single value
const sum = numbers.reduce(function (acc, num) {
  return acc + num;
}, 0);
console.log("reduce -> sum:", sum);
console.log("------------------------------");

// find -> returns the first element that matches
const firstEven = numbers.find(function (num) {
  return num % 2 === 0;
});
console.log("find -> first even:", firstEven);
console.log("------------------------------");

// some -> checks if at least one element passes a test
const hasEven = numbers.some(function (num) {
  return num % 2 === 0;
});
console.log("some -> has even number:", hasEven);
console.log("------------------------------");

// every -> checks if all elements pass a test
const allPositive = numbers.every(function (num) {
  return num > 0;
});
console.log("every -> all positive:", allPositive);
console.log("------------------------------");

// ---------------------------------------------------
// 4. Custom Higher-Order Function Example
// ---------------------------------------------------
function applyOperation(arr, operation) {
  const result = [];
  for (let i = 0; i < arr.length; i++) {
    result.push(operation(arr[i]));
  }
  return result;
}

const doubled = applyOperation(numbers, function (num) {
  return num * 2;
});
console.log("Custom HOF applyOperation -> doubled:", doubled);
console.log("------------------------------");

// ---------------------------------------------------
// 5. Why Higher-Order Functions are Useful
// ---------------------------------------------------
// - Make code reusable and modular
// - Improve readability (functional style)
// - Powerful for working with arrays, callbacks, async code

// ---------------------------------------------------
// 6. Best Practices
// ---------------------------------------------------
// - Use built-in array methods (map, filter, reduce) instead of manual loops
// - Keep callback functions simple and pure (no side effects)
// - Combine HOFs for cleaner logic
// - Use arrow functions for short callbacks

// ---------------------------------------------------
// 7. Summary
// ---------------------------------------------------
console.log("=== Higher-Order Functions Summary ===");
console.log("HOF -> A function that takes another function OR returns one");
console.log("Examples -> forEach, map, filter, reduce, find, some, every");
console.log(
  "Benefits -> Reusable, modular, readable, functional programming style"
);
console.log("Custom Example -> multiplier(factor) returns a new function");
