// =============================
// if-else in JavaScript
// =============================
// if-else statements are used for decision making.
// They let us execute different blocks of code based on conditions.

// ---------------------------------------------------
// 1. Basic if Statement
// ---------------------------------------------------
// Syntax:
// if (condition) {
//   // code to run if condition is true
// }

let age = 20;
if (age >= 18) {
  console.log("You are an adult.");
}
console.log("------------------------------");

// ---------------------------------------------------
// 2. if-else Statement
// ---------------------------------------------------
// Syntax:
// if (condition) {
//   // runs if condition is true
// } else {
//   // runs if condition is false
// }

let isRaining = false;
if (isRaining) {
  console.log("Take an umbrella.");
} else {
  console.log("No need for an umbrella.");
}
console.log("------------------------------");

// ---------------------------------------------------
// 3. if-else if-else Statement
// ---------------------------------------------------
// Syntax:
// if (condition1) {
//   // runs if condition1 is true
// } else if (condition2) {
//   // runs if condition2 is true
// } else {
//   // runs if none of the conditions are true
// }

let marks = 85;
if (marks >= 90) {
  console.log("Grade: A");
} else if (marks >= 75) {
  console.log("Grade: B");
} else if (marks >= 50) {
  console.log("Grade: C");
} else {
  console.log("Grade: Fail");
}
console.log("------------------------------");

// ---------------------------------------------------
// 4. Nested if Statements
// ---------------------------------------------------
// An if statement inside another if.
// Use carefully to avoid confusing code.

let hasID = true;
let personAge = 17;
if (hasID) {
  if (personAge >= 18) {
    console.log("You can enter the club.");
  } else {
    console.log("You are too young to enter.");
  }
} else {
  console.log("You need an ID to enter.");
}
console.log("------------------------------");

// ---------------------------------------------------
// 5. Using Boolean Expressions
// ---------------------------------------------------
// Any expression that evaluates to true or false can be used in if-else.

let number = 10;
if (number % 2 === 0) {
  console.log(number, "is Even");
} else {
  console.log(number, "is Odd");
}
console.log("------------------------------");

// ---------------------------------------------------
// 6. Best Practices
// ---------------------------------------------------
// - Use if-else for clear logic.
// - Avoid too many nested ifs -> makes code hard to read.
// - For simple true/false checks, you can directly use the condition.
//   Example: if (isLoggedIn) { ... } instead of if (isLoggedIn === true) { ... }

// ---------------------------------------------------
// 7. Summary
// ---------------------------------------------------
console.log("=== if-else Summary ===");
console.log("if -> Executes block if condition is true");
console.log("if-else -> Runs one block if true, another if false");
console.log("if-else if-else -> Multiple conditions in sequence");
console.log("Nested if -> if inside if (use sparingly)");
console.log(
  "Condition must be truthy/falsy -> e.g., comparisons, variables, expressions"
);
