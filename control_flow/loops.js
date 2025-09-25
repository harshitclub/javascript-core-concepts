// =============================
// Loops in JavaScript
// =============================
// Loops are used to execute a block of code repeatedly until a condition is met.
// Common loop types: for, while, do...while, for...in, for...of

// ---------------------------------------------------
// 1. for loop
// ---------------------------------------------------
// Syntax:
// for (initialization; condition; update) {
//   // code to run
// }

console.log("=== for loop Example ===");
for (let i = 1; i <= 5; i++) {
  console.log("i =", i);
}
console.log("------------------------------");

// ---------------------------------------------------
// 2. while loop
// ---------------------------------------------------
// Syntax:
// while (condition) {
//   // code to run
// }

console.log("=== while loop Example ===");
let count = 1;
while (count <= 5) {
  console.log("count =", count);
  count++;
}
console.log("------------------------------");

// ---------------------------------------------------
// 3. do...while loop
// ---------------------------------------------------
// Syntax:
// do {
//   // code to run
// } while (condition);

console.log("=== do...while loop Example ===");
let num = 1;
do {
  console.log("num =", num);
  num++;
} while (num <= 5);
console.log("Note: do...while runs at least once, even if condition is false.");
console.log("------------------------------");

// ---------------------------------------------------
// 4. for...in loop
// ---------------------------------------------------
// Used to loop through properties of an object.

console.log("=== for...in loop Example ===");
let person = { name: "Alice", age: 25, isEmployed: true };
for (let key in person) {
  console.log(key, ":", person[key]);
}
console.log("------------------------------");

// ---------------------------------------------------
// 5. for...of loop
// ---------------------------------------------------
// Used to loop through values of an iterable (like arrays, strings).

console.log("=== for...of loop Example (Array) ===");
let colors = ["Red", "Green", "Blue"];
for (let color of colors) {
  console.log(color);
}

console.log("=== for...of loop Example (String) ===");
let word = "JS";
for (let char of word) {
  console.log(char);
}
console.log("------------------------------");

// ---------------------------------------------------
// 6. break and continue
// ---------------------------------------------------
// break -> exits the loop completely
// continue -> skips the current iteration and moves to the next

console.log("=== break and continue Example ===");
for (let i = 1; i <= 5; i++) {
  if (i === 3) {
    console.log("Skipping 3 (continue)");
    continue; // skip when i = 3
  }
  if (i === 5) {
    console.log("Breaking at 5");
    break; // stop loop completely when i = 5
  }
  console.log("i =", i);
}
console.log("------------------------------");

// ---------------------------------------------------
// 7. Best Practices
// ---------------------------------------------------
// - Use for loop when you know the number of iterations.
// - Use while loop when the number of iterations is unknown.
// - Use do...while when you want the loop to run at least once.
// - Use for...in for objects (keys).
// - Use for...of for arrays, strings, and other iterables.
// - Avoid infinite loops (when condition never becomes false).

// ---------------------------------------------------
// 8. Summary
// ---------------------------------------------------
console.log("=== Loops Summary ===");
console.log("for -> Repeats with init, condition, update");
console.log("while -> Repeats while condition is true");
console.log("do...while -> Runs at least once, then checks condition");
console.log("for...in -> Iterates over object keys");
console.log("for...of -> Iterates over iterable values (arrays, strings)");
console.log("break -> Exit loop completely");
console.log("continue -> Skip current iteration, go to next");
