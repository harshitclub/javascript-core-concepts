// =============================
// Data Types in JavaScript
// =============================

// Data types represent the type of data a variable can hold.
// There are 2 main categories:
// 1. Primitive Data Types
// 2. Non-Primitive Data Types

// ---------------------------------------------------
// 1. Primitive Data Types
// ---------------------------------------------------
// - The most basic data types in JavaScript.
// - They are immutable (their actual values cannot be changed).
// - Examples:
//   a. Number
//   b. String
//   c. Boolean
//   d. Null
//   e. Undefined
//   f. Symbol (ES6)
//   g. BigInt (ES2020)

// a. Number
let age = 25;
let price = 19.99;
console.log("Age:", age);
console.log("Price:", price);
console.log("Type of age:", typeof age);
console.log("Type of price:", typeof price);
console.log("------------------------------");

// b. String
let firstName = "John";
let lastName = "Doe";
let fullName = `Full Name: ${firstName} ${lastName}`; // Template literal
console.log("First Name:", firstName);
console.log("Last Name:", lastName);
console.log(fullName);
console.log("Type of firstName:", typeof firstName);
console.log("------------------------------");

// c. Boolean
let isStudent = true;
let hasGraduated = false;
console.log("Is Student:", isStudent);
console.log("Has Graduated:", hasGraduated);
console.log("Type of isStudent:", typeof isStudent);
console.log("------------------------------");

// d. Null
let emptyValue = null;
console.log("Empty Value:", emptyValue);
console.log("Type of emptyValue:", typeof emptyValue);
// Note: This shows "object" because of a historical bug in JavaScript.
console.log("------------------------------");

// e. Undefined
let notAssigned;
console.log("Not Assigned:", notAssigned);
console.log("Type of notAssigned:", typeof notAssigned);
console.log("------------------------------");

// f. Symbol (ES6)
let sym1 = Symbol("unique");
let sym2 = Symbol("unique");
console.log("Symbol 1:", sym1);
console.log("Symbol 2:", sym2);
console.log("Are sym1 and sym2 equal?", sym1 === sym2); // false, each Symbol is unique
console.log("Type of sym1:", typeof sym1);
console.log("------------------------------");

// g. BigInt (ES2020)
// - Used to represent very large integers beyond Number's safe range.
let bigNumber = 1234567890123456789012345678901234567890n;
console.log("BigInt Value:", bigNumber);
console.log("Type of bigNumber:", typeof bigNumber);
console.log("------------------------------");

// ---------------------------------------------------
// 2. Non-Primitive Data Types
// ---------------------------------------------------
// - These are more complex data types.
// - They are mutable (their values can be modified).
// - Examples:
//   a. Object
//   b. Array
//   c. Function

// a. Object
let person = {
  name: "Alice",
  age: 30,
  isEmployed: true,
};
console.log("Person Object:", person);
console.log("Name:", person.name);
console.log("Age:", person.age);
console.log("Is Employed:", person.isEmployed);
console.log("Type of person:", typeof person);
console.log("------------------------------");

// b. Array
let colors = ["Red", "Green", "Blue"];
console.log("Colors Array:", colors);
console.log("First Color:", colors[0]);
console.log("Number of Colors:", colors.length);
console.log("Type of colors:", typeof colors);
// Note: typeof shows "object" because arrays are special kinds of objects.
console.log("------------------------------");

// c. Function
function greet(name) {
  return `Hello, ${name}!`;
}
console.log(greet("Bob"));
console.log("Type of greet:", typeof greet);
console.log("------------------------------");

// ---------------------------------------------------
// Summary of Data Types
// ---------------------------------------------------
console.log("=== Primitive Types ===");
console.log("Number, String, Boolean, Null, Undefined, Symbol, BigInt");

console.log("\n=== Non-Primitive Types ===");
console.log("Object, Array, Function");

console.log("\nPrimitive -> Immutable, hold single value");
console.log(
  "Non-Primitive -> Mutable, can hold multiple values or collections"
);
