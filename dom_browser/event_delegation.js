// ============================================================
// EVENT DELEGATION MASTERCLASS
// Author: Harshit Kumar
// ============================================================

// ------------------------------------------------------------
// SECTION 1: Event Bubbling Refresher
// ------------------------------------------------------------
// Most events "bubble up" the DOM tree. For example, clicking
// a <li> inside <ul> triggers listeners on <li>, <ul>, <body>, etc.
// Event delegation USES this bubbling to handle child events
// at the parent level efficiently.
// ------------------------------------------------------------

// Utility function for logging messages
const log = (message) => {
  const logBox = document.getElementById("log");
  const entry = document.createElement("div");
  entry.textContent = message;
  logBox.appendChild(entry);
  logBox.scrollTop = logBox.scrollHeight;
};

// ------------------------------------------------------------
// SECTION 2: The Inefficient Way (Individual Listeners)
// ------------------------------------------------------------
// Here, each button has its own listener. Works fine for small cases,
// but becomes a nightmare if you have 1000 elements or dynamically added ones.

const buttons = document.querySelectorAll("#nonDelegatedContainer .btn");

buttons.forEach((btn) => {
  btn.addEventListener("click", (e) => {
    log(`Clicked "${e.target.textContent}" (individual listener)`);
  });
});

// ------------------------------------------------------------
// SECTION 3: The Efficient Way (Event Delegation)
// ------------------------------------------------------------
// One listener on the parent <ul>. Inside the listener, we check
// which child triggered the event using e.target.
// ------------------------------------------------------------

const list = document.getElementById("delegatedList");

list.addEventListener("click", (e) => {
  // e.target = the actual element clicked inside the UL
  if (e.target && e.target.tagName === "LI") {
    e.target.classList.toggle("highlight");
    log(`Clicked on "${e.target.textContent}" (delegated listener)`);
  }
});

// ------------------------------------------------------------
// SECTION 4: Adding Dynamic Elements
// ------------------------------------------------------------
// This shows the biggest advantage of delegation: newly added elements
// automatically work without adding new listeners!
// ------------------------------------------------------------

document.getElementById("addFruitBtn").addEventListener("click", () => {
  const newFruit = document.createElement("li");
  const fruits = ["Mango 🥭", "Orange 🍊", "Pineapple 🍍", "Kiwi 🥝"];
  newFruit.textContent = fruits[Math.floor(Math.random() * fruits.length)];
  list.appendChild(newFruit);
  log(`➕ Added new fruit "${newFruit.textContent}"`);
});

// ------------------------------------------------------------
// SECTION 5: Event Capturing (for completeness)
// ------------------------------------------------------------
// Events can also be "captured" from top to bottom instead of bottom-up.
// This is rarely used, but for learning:
// document.addEventListener("click", handler, true); // true = capture phase
// Capture phase goes document -> body -> ul -> li
// Bubbling goes li -> ul -> body -> document
// ------------------------------------------------------------

// Example of capturing (you can uncomment this to see order)
// document.addEventListener("click", (e) => {
//   console.log("Captured at document:", e.target.tagName);
// }, true);

// ------------------------------------------------------------
// SECTION 6: Stopping Propagation
// ------------------------------------------------------------
// e.stopPropagation() stops the event from bubbling further up the tree.
// e.stopImmediatePropagation() also prevents other handlers on the same element.
// ------------------------------------------------------------

// Example:
// list.addEventListener("click", (e) => {
//   e.stopPropagation(); // would stop event bubbling
// });

// ------------------------------------------------------------
// SECTION 7: Best Practices for Event Delegation
// ------------------------------------------------------------
// ✅ Attach listener to the closest static ancestor
// ✅ Always check e.target (filter by tag or class)
// ✅ Avoid unnecessary DOM queries inside the listener
// ✅ Works great for dynamic elements (added later)
// ✅ Use with caution on large document-level listeners
// ------------------------------------------------------------

// ------------------------------------------------------------
// Quick Summary (as comments for learners)
// ------------------------------------------------------------
//
// EVENT DELEGATION = Listen once, handle many.
// - Uses event bubbling.
// - More efficient than multiple listeners.
// - Perfect for dynamic DOM elements.
//
// Bubbling order example (clicking a <li>):
// li → ul → body → html → document
//
// Event object key properties:
// - e.target → actual clicked element
// - e.currentTarget → element the listener is attached to
// - e.stopPropagation() → stops bubbling
// - e.preventDefault() → stops default behavior (e.g. form submit)
//
// Common real-world use cases:
// - Handling clicks on dynamic lists or tables
// - Delegating input field validations in forms
// - Catching button clicks in data tables or todo lists
// ============================================================
