// =============================
// Operators in JavaScript
// =============================
// Operators are special symbols that perform operations on operands (values and variables).
// Categories:
// 1. Arithmetic Operators
// 2. Assignment Operators
// 3. Comparison Operators
// 4. Logical Operators
// 5. String Operators
// 6. Conditional (Ternary) Operator
// 7. Type Operators
// 8. Bitwise Operators

// ---------------------------------------------------
// 1. Arithmetic Operators
// ---------------------------------------------------
let a = 10;
let b = 3;
console.log("a =", a, ", b =", b);
console.log("Addition (a + b):", a + b);
console.log("Subtraction (a - b):", a - b);
console.log("Multiplication (a * b):", a * b);
console.log("Division (a / b):", a / b);
console.log("Modulus (a % b):", a % b);
console.log("Exponentiation (a ** b):", a ** b);

// Increment and Decrement
console.log("Post Increment (a++):", a++); // shows old value (10), then a becomes 11
console.log("Value of a after a++:", a); // 11
console.log("Pre Increment (++a):", ++a); // increases first, then shows (12)

console.log("Post Decrement (b--):", b--); // shows old value (3), then b becomes 2
console.log("Value of b after b--:", b); // 2
console.log("Pre Decrement (--b):", --b); // decreases first, then shows (1)
console.log("------------------------------");

// ---------------------------------------------------
// 2. Assignment Operators
// ---------------------------------------------------
let x = 5;
console.log("Initial x:", x);
x += 3; // x = x + 3
console.log("x += 3:", x);
x -= 2; // x = x - 2
console.log("x -= 2:", x);
x *= 4; // x = x * 4
console.log("x *= 4:", x);
x /= 2; // x = x / 2
console.log("x /= 2:", x);
x %= 3; // x = x % 3
console.log("x %= 3:", x);
x **= 2; // x = x ** 2
console.log("x **= 2:", x);
console.log("------------------------------");

// ---------------------------------------------------
// 3. Comparison Operators
// ---------------------------------------------------
let p = 7;
let q = "7";
console.log("p =", p, ", q =", q);
console.log("Equal (p == q):", p == q); // true (value only)
console.log("Strict Equal (p === q):", p === q); // false (value + type)
console.log("Not Equal (p != q):", p != q); // false
console.log("Strict Not Equal (p !== q):", p !== q); // true
console.log("Greater Than (p > 5):", p > 5);
console.log("Less Than (p < 10):", p < 10);
console.log("Greater Than or Equal (p >= 7):", p >= 7);
console.log("Less Than or Equal (p <= 6):", p <= 6);
console.log("------------------------------");

// ---------------------------------------------------
// 4. Logical Operators
// ---------------------------------------------------
let isAdult = true;
let hasID = false;
console.log("isAdult =", isAdult, ", hasID =", hasID);
console.log("Logical AND (isAdult && hasID):", isAdult && hasID); // false
console.log("Logical OR (isAdult || hasID):", isAdult || hasID); // true
console.log("Logical NOT (!isAdult):", !isAdult); // false
console.log("------------------------------");

// ---------------------------------------------------
// 5. String Operators
// ---------------------------------------------------
let firstName = "John";
let lastName = "Doe";
let fullName = firstName + " " + lastName; // Concatenation
console.log("Full Name (firstName + ' ' + lastName):", fullName);

// Using += with strings
let message = "Hello";
message += " World!";
console.log("Using +=:", message);
console.log("------------------------------");

// ---------------------------------------------------
// 6. Conditional (Ternary) Operator
// ---------------------------------------------------
let age = 18;
let canVote = age >= 18 ? "Yes, can vote" : "No, cannot vote";
console.log("Age:", age);
console.log("Can Vote:", canVote);
console.log("------------------------------");

// ---------------------------------------------------
// 7. Type Operators
// ---------------------------------------------------
let num = 42;
let str = "Hello";
let obj = { name: "Alice", age: 25 };
let arr = [1, 2, 3];

console.log("Type of num:", typeof num); // number
console.log("Type of str:", typeof str); // string
console.log("Type of obj:", typeof obj); // object
console.log("Type of arr:", typeof arr); // object (arrays are objects)
console.log("Does obj have property 'name'?:", "name" in obj); // true
console.log("arr instanceof Array:", arr instanceof Array); // true
console.log("obj instanceof Object:", obj instanceof Object); // true

// Special case
console.log("Type of null:", typeof null); // object (historical bug in JS)
console.log("------------------------------");

// ---------------------------------------------------
// 8. Bitwise Operators
// ---------------------------------------------------
let m = 5; // Binary: 0101
let n = 3; // Binary: 0011
console.log("m =", m, ", n =", n);
console.log("Bitwise AND (m & n):", m & n); // 1 (0001)
console.log("Bitwise OR (m | n):", m | n); // 7 (0111)
console.log("Bitwise XOR (m ^ n):", m ^ n); // 6 (0110)
console.log("Bitwise NOT (~m):", ~m); // -6 (inverts bits)
console.log("Left Shift (m << 1):", m << 1); // 10 (1010)
console.log("Right Shift (m >> 1):", m >> 1); // 2 (0010)
console.log("Unsigned Right Shift (m >>> 1):", m >>> 1); // 2
console.log("------------------------------");

// ---------------------------------------------------
// Summary
// ---------------------------------------------------
console.log("=== Operators Summary ===");
console.log("Arithmetic -> +, -, *, /, %, **, ++, --");
console.log("Assignment -> =, +=, -=, *=, /=, %=, **=");
console.log("Comparison -> ==, ===, !=, !==, >, <, >=, <=");
console.log("Logical -> &&, ||, !");
console.log("String -> +, +=");
console.log("Conditional -> ? :");
console.log("Type -> typeof, instanceof, in");
console.log("Bitwise -> &, |, ^, ~, <<, >>, >>>");
