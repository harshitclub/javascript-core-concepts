// =============================
// switch in JavaScript
// =============================
// switch is used to execute one block of code from many options.
// It compares values using strict comparison (===).
// Useful when you have multiple possible cases for a variable.

// ---------------------------------------------------
// 1. Basic switch Example
// ---------------------------------------------------
let day = 3;
switch (day) {
  case 1:
    console.log("Monday");
    break;
  case 2:
    console.log("Tuesday");
    break;
  case 3:
    console.log("Wednesday");
    break;
  case 4:
    console.log("Thursday");
    break;
  case 5:
    console.log("Friday");
    break;
  case 6:
    console.log("Saturday");
    break;
  case 7:
    console.log("Sunday");
    break;
  default:
    console.log("Invalid day");
}
console.log("------------------------------");

// ---------------------------------------------------
// 2. switch with default
// ---------------------------------------------------
// The default block runs if none of the cases match.

let fruit = "Mango";
switch (fruit) {
  case "Apple":
    console.log("Apples are red or green.");
    break;
  case "Banana":
    console.log("Bananas are yellow.");
    break;
  case "Orange":
    console.log("Oranges are orange.");
    break;
  default:
    console.log("Fruit not found.");
}
console.log("------------------------------");

// ---------------------------------------------------
// 3. Multiple cases with same result (fall-through)
// ---------------------------------------------------

let grade = "B";
switch (grade) {
  case "A":
  case "B":
    console.log("Good Job!");
    break;
  case "C":
    console.log("You passed.");
    break;
  case "D":
  case "F":
    console.log("Better luck next time.");
    break;
  default:
    console.log("Invalid grade.");
}
console.log("------------------------------");

// ---------------------------------------------------
// 4. Strict Comparison in switch
// ---------------------------------------------------
// switch uses === (strict equality) for comparison.

let num = "10"; // string
switch (num) {
  case 10: // number
    console.log("Matched number 10");
    break;
  case "10": // string
    console.log("Matched string '10'");
    break;
  default:
    console.log("No match");
}
// Output will be: "Matched string '10'"
console.log("------------------------------");

// ---------------------------------------------------
// 5. Missing break leads to fall-through
// ---------------------------------------------------

let color = "Red";
switch (color) {
  case "Red":
    console.log("Color is Red");
  // break missing -> falls into next case
  case "Blue":
    console.log("Color is Blue");
    break;
  default:
    console.log("Other color");
}
// Output: "Color is Red" + "Color is Blue"
console.log("------------------------------");

// ---------------------------------------------------
// 6. Best Practices
// ---------------------------------------------------
// - Always use break unless you intentionally want fall-through.
// - Use default to handle unexpected values.
// - switch is best when comparing a single value against many options.
// - For ranges (e.g., marks >= 90), prefer if-else instead.

// ---------------------------------------------------
// 7. Summary
// ---------------------------------------------------
console.log("=== switch Summary ===");
console.log("switch -> Compares a value against multiple cases");
console.log("Strict comparison (===) is used");
console.log("case -> Block of code for a specific match");
console.log("break -> Prevents fall-through to next case");
console.log("default -> Runs if no case matches");
console.log("Good for exact matches, not ranges");
