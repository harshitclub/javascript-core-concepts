// =============================
// JavaScript Variables
// =============================

// Variables in JavaScript are used to store data values.
// We can declare variables using three keywords: var, let, and const.

// ---------------------------------------------------
// 1. var
// ---------------------------------------------------
// - Introduced in the early versions of JavaScript.
// - var is "function scoped" (accessible inside the function where it is declared).
// - var can be REDECLARED and REASSIGNED.
// - Because of these features, it can sometimes cause bugs if not used carefully.

var myName = "Harshit";
console.log("My Name (using var):", myName);

// Redeclaring var is allowed
var myName = "Harshit Kumar";
console.log("Redeclared var myName:", myName);

// Reassigning var is also allowed
myName = "Harsh";
console.log("Reassigned var myName:", myName);

// ---------------------------------------------------
// 2. let
// ---------------------------------------------------
// - Introduced in ES6 (2015).
// - let is "block scoped" (only accessible inside the block where it is declared).
// - let can be REASSIGNED but NOT REDECLARED in the same scope.
// - Safer to use compared to var.

let myAge = 21;
console.log("My Age (using let):", myAge);

// Reassigning let is allowed
myAge = 22;
console.log("Reassigned let myAge:", myAge);

// Redeclaring let in the same scope is NOT allowed
// let myAge = 23; // ❌ This will throw an error

// ---------------------------------------------------
// 3. const
// ---------------------------------------------------
// - Introduced in ES6 (2015).
// - const is also "block scoped" (like let).
// - const CANNOT be reassigned and CANNOT be redeclared.
// - Must always be initialized when declared.

const myEmail = "harshitclub@gmail.com";
console.log("My Email (using const):", myEmail);

// Reassigning const is NOT allowed
// myEmail = "newemail@gmail.com"; // ❌ This will throw an error

// Redeclaring const is NOT allowed
// const myEmail = "another@gmail.com"; // ❌ This will throw an error

// ---------------------------------------------------
// Differences between var, let, and const
// ---------------------------------------------------
console.log("\n=== Differences Between var, let, and const ===");
console.log("var  -> Function scoped, can be redeclared and reassigned");
console.log(
  "let  -> Block scoped, cannot be redeclared in same scope, can be reassigned"
);
console.log(
  "const -> Block scoped, cannot be redeclared, cannot be reassigned"
);

// ---------------------------------------------------
// Merits & Demerits
// ---------------------------------------------------
// var
console.log("\nMerits of var: Easy to use, older codebase support");
console.log("Demerits of var: Can be redeclared/reassigned -> leads to bugs");

// let
console.log("\nMerits of let: Block scope, flexible (can be reassigned)");
console.log("Demerits of let: Cannot be redeclared in same scope");

// const
console.log("\nMerits of const: Safer, value remains constant");
console.log(
  "Demerits of const: Cannot be reassigned, must be initialized immediately"
);
