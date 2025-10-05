// =======================================================
// JAVASCRIPT EVENTS MASTERCLASS
// Author: Harshit Kumar
// =======================================================

// Utility function for logging
const log = (msg) => {
  const logBox = document.getElementById("log");
  const entry = document.createElement("div");
  entry.textContent = msg;
  logBox.appendChild(entry);
  logBox.scrollTop = logBox.scrollHeight;
};

// =======================================================
// 1. BASIC MOUSE EVENTS
// =======================================================
// Common mouse events:
// click, dblclick, mouseover, mouseout, mousedown, mouseup, mousemove, contextmenu

const clickBtn = document.getElementById("clickBtn");
const dblClickBtn = document.getElementById("dblClickBtn");
const mouseArea = document.getElementById("mouseArea");

clickBtn.addEventListener("click", (e) => {
  log(`🖱️ Button clicked! Event type: ${e.type}`);
});

dblClickBtn.addEventListener("dblclick", (e) => {
  log(`⚡ Double click detected on: ${e.target.textContent}`);
});

mouseArea.addEventListener("mouseover", () => {
  log("➡️ Mouse entered yellow box");
});

mouseArea.addEventListener("mouseout", () => {
  log("⬅️ Mouse left yellow box");
});

// =======================================================
// 2. KEYBOARD EVENTS
// =======================================================
// keydown -> fires when key is pressed down
// keyup -> fires when key is released
// keypress -> (deprecated) only fires for printable characters

const input = document.getElementById("keyboardInput");
const result = document.getElementById("keyResult");

input.addEventListener("keydown", (e) => {
  log(`🔡 Key down: ${e.key} (code: ${e.code})`);
});

input.addEventListener("keyup", (e) => {
  result.textContent = `You released: ${e.key}`;
});

// =======================================================
// 3. FORM & INPUT EVENTS
// =======================================================
// input -> fires on every keystroke/change
// change -> fires when value changes & input loses focus
// submit -> form submission
// preventDefault() -> stops default browser behavior (like reloading)

const form = document.getElementById("demoForm");
const nameInput = document.getElementById("nameInput");
const selectInput = document.getElementById("selectInput");

nameInput.addEventListener("input", (e) => {
  log(`✏️ Typing: ${e.target.value}`);
});

selectInput.addEventListener("change", (e) => {
  log(`🏙️ Selected city: ${e.target.value}`);
});

form.addEventListener("submit", (e) => {
  e.preventDefault(); // prevent reload
  log(
    `✅ Form submitted with name: ${nameInput.value}, city: ${selectInput.value}`
  );
});

// =======================================================
// 4. WINDOW EVENTS
// =======================================================
// Common window events: load, scroll, resize, focus, blur

window.addEventListener("load", () => {
  log("🌐 Page fully loaded!");
});

window.addEventListener("scroll", () => {
  log("🌀 You scrolled the page!");
});

window.addEventListener("resize", () => {
  log(`📏 Window resized: ${window.innerWidth}x${window.innerHeight}`);
});

// =======================================================
// 5. EVENT OBJECT DETAILS
// =======================================================
// Every event listener receives an event object (e).
// Useful properties: type, target, currentTarget, key, code, clientX, clientY, etc.

clickBtn.addEventListener("click", (e) => {
  console.log("Event Object:", e);
  log(`Event details logged to console! (Check DevTools)`);
});

// =======================================================
// 6. EVENT PROPAGATION (Bubbling & Capturing)
// =======================================================
// Bubbling = event travels from target -> parents -> document
// Capturing = event travels from root -> target (useCapture = true)

// Example:
document.body.addEventListener(
  "click",
  (e) => {
    console.log("CAPTURING PHASE: body clicked", e.target.tagName);
  },
  true // capture phase
);

document.body.addEventListener("click", (e) => {
  console.log("BUBBLING PHASE: body clicked", e.target.tagName);
});

// =======================================================
// 7. STOPPING PROPAGATION & DEFAULT BEHAVIOR
// =======================================================
// e.stopPropagation() -> stops bubbling
// e.preventDefault() -> stops default browser behavior (like link navigation, form submit)

const stopBtn = document.createElement("button");
stopBtn.textContent = "Click Me (Stops Propagation)";
stopBtn.id = "stopBtn";
document.body.appendChild(stopBtn);

stopBtn.addEventListener("click", (e) => {
  e.stopPropagation();
  log("⛔ Event propagation stopped!");
});

// =======================================================
// 8. CUSTOM EVENTS
// =======================================================
// You can define your own events and dispatch them using new CustomEvent().
// Great for modular apps or component communication.

const customBtn = document.getElementById("customBtn");

customBtn.addEventListener("customAction", (e) => {
  log(`🎉 Custom event fired with data: ${e.detail.message}`);
});

customBtn.addEventListener("click", () => {
  const event = new CustomEvent("customAction", {
    detail: { message: "Hello from CustomEvent!" },
  });
  customBtn.dispatchEvent(event);
});

// =======================================================
// 9. EVENT LISTENER OPTIONS
// =======================================================
// addEventListener(type, listener, options)
// options can include: { once: true, capture: true, passive: true }

const onceBtn = document.createElement("button");
onceBtn.textContent = "Click Once Button";
document.body.appendChild(onceBtn);

onceBtn.addEventListener(
  "click",
  () => {
    log("🧨 This event fires only once!");
  },
  { once: true }
);

// =======================================================
// 10. SUMMARY & BEST PRACTICES
// =======================================================
//
// ✅ Always use addEventListener (don’t override with onclick)
// ✅ Always clean up listeners when removing elements (memory leaks)
// ✅ Know the difference between bubbling and capturing
// ✅ Use event delegation for dynamic content
// ✅ Prefer passive listeners for scroll/touch for performance
// ✅ Avoid anonymous functions if you need to remove them later
// =======================================================
