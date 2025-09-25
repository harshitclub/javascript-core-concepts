// =============================
// Type Conversion and Coercion in JavaScript
// =============================
// Type Conversion -> Converting a value from one data type to another (done manually).
// Type Coercion   -> JavaScript automatically converts data types (done implicitly).

// ---------------------------------------------------
// 1. Explicit Type Conversion
// ---------------------------------------------------

// Converting to String
let num = 123;
let strNum = String(num);
console.log("Explicit Conversion to String:", strNum, "Type:", typeof strNum);

// Another way: toString()
let num2 = 456;
console.log(
  "Using toString():",
  num2.toString(),
  "Type:",
  typeof num2.toString()
);

// Converting to Number
let str = "789";
let numStr = Number(str);
console.log("Explicit Conversion to Number:", numStr, "Type:", typeof numStr);

// parseInt and parseFloat
let floatStr = "12.34";
console.log(
  "parseInt('12.34'):",
  parseInt(floatStr),
  "Type:",
  typeof parseInt(floatStr)
);
console.log(
  "parseFloat('12.34'):",
  parseFloat(floatStr),
  "Type:",
  typeof parseFloat(floatStr)
);

// Converting invalid number string
console.log("Number('abc'):", Number("abc")); // NaN

// Converting to Boolean
let zero = 0;
let boolZero = Boolean(zero);
console.log("Boolean(0):", boolZero);

let nonEmptyStr = "Hello";
console.log("Boolean('Hello'):", Boolean(nonEmptyStr));

let emptyStr = "";
console.log("Boolean(''):", Boolean(emptyStr));
console.log("------------------------------");

// ---------------------------------------------------
// 2. Implicit Type Conversion (Type Coercion)
// ---------------------------------------------------
// JavaScript automatically converts types in certain situations.

let result1 = "5" + 10; // Number 10 -> String
console.log("'5' + 10 =", result1, "Type:", typeof result1); // "510" (string)

let result2 = "5" - 2; // String '5' -> Number
console.log("'5' - 2 =", result2, "Type:", typeof result2); // 3 (number)

let result3 = "5" * "2"; // Both -> Numbers
console.log("'5' * '2' =", result3, "Type:", typeof result3); // 10 (number)

let result4 = "10" / 2;
console.log("'10' / 2 =", result4, "Type:", typeof result4); // 5 (number)

let result5 = 5 + true; // true -> 1
console.log("5 + true =", result5, "Type:", typeof result5);

let result6 = 5 + false; // false -> 0
console.log("5 + false =", result6, "Type:", typeof result6);

let result7 = null + 5; // null -> 0
console.log("null + 5 =", result7, "Type:", typeof result7);

let result8 = undefined + 5; // undefined -> NaN
console.log("undefined + 5 =", result8, "Type:", typeof result8);

// Unary plus shorthand for conversion
console.log('+"123" =', +"123", "Type:", typeof +"123"); // 123 (number)
console.log("+true =", +true, "Type:", typeof +true); // 1
console.log("+false =", +false, "Type:", typeof +false); // 0
console.log("------------------------------");

// ---------------------------------------------------
// 3. Truthy and Falsy Values
// ---------------------------------------------------
// Falsy values: false, 0, -0, 0n (BigInt zero), "", null, undefined, NaN
// Everything else is truthy.

console.log("Boolean(false):", Boolean(false));
console.log("Boolean(0):", Boolean(0));
console.log("Boolean(-0):", Boolean(-0));
console.log("Boolean(0n):", Boolean(0n));
console.log("Boolean(''):", Boolean(""));
console.log("Boolean(null):", Boolean(null));
console.log("Boolean(undefined):", Boolean(undefined));
console.log("Boolean(NaN):", Boolean(NaN));

console.log("Boolean('Hello'):", Boolean("Hello"));
console.log("Boolean(123):", Boolean(123));
console.log("Boolean([]):", Boolean([]));
console.log("Boolean({}):", Boolean({}));
console.log("------------------------------");

// ---------------------------------------------------
// 4. Summary
// ---------------------------------------------------
console.log("=== Type Conversion Summary ===");
console.log(
  "Explicit -> String(), Number(), Boolean(), parseInt(), parseFloat()"
);
console.log(
  "Implicit -> Happens automatically with operators (+, -, *, /, etc.)"
);
console.log("Falsy values -> false, 0, -0, 0n, '', null, undefined, NaN");
console.log("Truthy values -> Everything else");
