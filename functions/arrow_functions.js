// =============================
// Arrow Functions in JavaScript
// =============================
// Arrow functions were introduced in ES6 (2015).
// They provide a shorter syntax for writing functions.
// Arrow functions also behave differently with 'this', 'arguments', and constructors.

// ---------------------------------------------------
// 1. Normal Function vs Arrow Function
// ---------------------------------------------------
function add(a, b) {
  return a + b;
}
console.log("Normal Function add(2, 3):", add(2, 3));

const addArrow = (a, b) => a + b;
console.log("Arrow Function addArrow(2, 3):", addArrow(2, 3));
console.log("------------------------------");

// ---------------------------------------------------
// 2. Arrow Function Variations
// ---------------------------------------------------

// Single parameter (no need for parentheses if only one parameter)
const square = (x) => x * x;
console.log("square(4):", square(4));

// No parameters
const greet = () => console.log("Hello, World!");
greet();

// Block body (use {} and return explicitly)
const multiply = (a, b) => {
  const result = a * b;
  return result;
};
console.log("multiply(2, 3):", multiply(2, 3));
console.log("------------------------------");

// ---------------------------------------------------
// 3. 'this' Behavior in Arrow Functions
// ---------------------------------------------------
// Arrow functions do NOT have their own 'this'.
// They use 'this' from the surrounding context (lexical scoping).

const obj = {
  value: 10,
  increment: function () {
    setTimeout(() => {
      this.value++;
      console.log("Arrow inside setTimeout:", this.value); // Correctly logs 11
    }, 500);
  },
};
obj.increment();

// Example of arrow function NOT suitable as an object method
const obj2 = {
  value: 10,
  increment: () => {
    this.value++;
    console.log("Arrow as method:", this.value); // undefined (or error in strict mode)
  },
};
obj2.increment();
console.log("------------------------------");

// ---------------------------------------------------
// 4. Arrow Functions Cannot Be Constructors
// ---------------------------------------------------
// Normal function works as a constructor with 'new'
// Arrow function CANNOT be used as constructor -> will throw error

const Person = (name) => {
  this.name = name;
};
// const john = new Person("John"); // ❌ TypeError: Person is not a constructor
console.log("Arrow function cannot be used as a constructor.");
console.log("------------------------------");

// ---------------------------------------------------
// 5. No 'arguments' Object in Arrow Functions
// ---------------------------------------------------
// Normal function has 'arguments' object.
// Arrow functions do not.

const normalFunc = function () {
  console.log("Normal function arguments:", arguments);
};
normalFunc(1, 2, 3);

const arrowFunc = () => {
  // console.log(arguments); // ❌ ReferenceError: arguments is not defined
  console.log("Arrow functions do not have 'arguments'.");
};
arrowFunc(1, 2, 3);

// Using rest parameters instead
const showArgsRest = (...args) => {
  console.log("Arrow with rest parameters:", args);
};
showArgsRest(1, 2, 3);
console.log("------------------------------");

// ---------------------------------------------------
// 6. Best Practices
// ---------------------------------------------------
// ✅ Use arrow functions for:
// - Short, simple functions
// - Callbacks (setTimeout, array methods, event handlers)
// - Cases where you want 'this' to be inherited from parent scope
//
// ❌ Avoid arrow functions for:
// - Object methods (when you need 'this' to refer to the object)
// - Constructor functions
// - Functions that need the 'arguments' object

// ---------------------------------------------------
// 7. Summary
// ---------------------------------------------------
console.log("=== Arrow Functions Summary ===");
console.log("Shorter syntax: const fn = (a, b) => a + b");
console.log("Lexical 'this': inherits from surrounding scope");
console.log("No 'arguments' object (use rest ...args instead)");
console.log("Cannot be used as constructors (no 'new')");
console.log("Best for callbacks and simple one-liners");
