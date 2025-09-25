// =============================
// Closures in JavaScript
// =============================
// A closure is a function that "remembers" variables from its outer scope,
// even after the outer function has finished executing.

// ---------------------------------------------------
// 1. Basic Closure Example
// ---------------------------------------------------
function outerFunction(outerVariable) {
  return function innerFunction(innerVariable) {
    console.log("Outer Variable:", outerVariable);
    console.log("Inner Variable:", innerVariable);
  };
}

const newFunction = outerFunction("outside");
newFunction("inside"); // Outer Variable: outside, Inner Variable: inside
console.log("------------------------------");

// ---------------------------------------------------
// 2. Closures for Data Privacy
// ---------------------------------------------------
// Closures let us create private variables (not directly accessible from outside).
function makeCounter() {
  let count = 0; // private variable
  return function () {
    count++;
    return count;
  };
}

const counter = makeCounter();
console.log("Counter:", counter()); // 1
console.log("Counter:", counter()); // 2
console.log("Counter:", counter()); // 3
// 'count' is hidden inside makeCounter, but still accessible to the returned function
console.log("------------------------------");

// ---------------------------------------------------
// 3. Closures with setTimeout
// ---------------------------------------------------
// Commonly used with async functions.
function delayedGreeting(name) {
  setTimeout(function () {
    console.log("Hello,", name + "!");
  }, 1000);
}

delayedGreeting("Alice");
console.log("------------------------------");

// ---------------------------------------------------
// 4. Closures in Loops
// ---------------------------------------------------
function createFunctionsVar() {
  const functions = [];
  for (var i = 0; i < 3; i++) {
    functions.push(function () {
      console.log("Function number (var):", i);
    });
  }
  return functions;
}

const funcsVar = createFunctionsVar();
funcsVar[0](); // 3
funcsVar[1](); // 3
funcsVar[2](); // 3
// Why? Because 'var' is function-scoped and shared among all closures
console.log("------------------------------");

// Fix using 'let' (block-scoped)
function createFunctionsLet() {
  const functions = [];
  for (let i = 0; i < 3; i++) {
    functions.push(function () {
      console.log("Function number (let):", i);
    });
  }
  return functions;
}

const funcsLet = createFunctionsLet();
funcsLet[0](); // 0
funcsLet[1](); // 1
funcsLet[2](); // 2
// Each closure gets its own copy of 'i' because of block scope
console.log("------------------------------");

// ---------------------------------------------------
// 5. Function Factory with Closures
// ---------------------------------------------------
function makeMultiplier(factor) {
  return function (num) {
    return num * factor;
  };
}

const double = makeMultiplier(2);
const triple = makeMultiplier(3);

console.log("Double 5:", double(5)); // 10
console.log("Triple 5:", triple(5)); // 15
console.log("------------------------------");

// ---------------------------------------------------
// 6. Why Closures Are Useful
// ---------------------------------------------------
// - Data privacy (like private variables)
// - Remembering state between function calls
// - Used in callbacks (setTimeout, event handlers, promises)
// - Helps in functional programming (function factories)

// ---------------------------------------------------
// 7. Best Practices
// ---------------------------------------------------
// - Be careful with closures inside loops when using 'var'
// - Prefer 'let' or 'const' in modern code
// - Use closures to create encapsulation, but avoid memory leaks by not overusing them
// - Understand how closures capture variables, not values

// ---------------------------------------------------
// 8. Summary
// ---------------------------------------------------
console.log("=== Closures Summary ===");
console.log(
  "Closure -> A function that remembers variables from its outer scope"
);
console.log(
  "Key Uses -> Data privacy, state, async callbacks, function factories"
);
console.log(
  "Loop Tip -> Use 'let' instead of 'var' to avoid unexpected results"
);
console.log("Closures keep variables alive even after outer function ends");
