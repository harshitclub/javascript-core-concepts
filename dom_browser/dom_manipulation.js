// ==========================================================
// DOM MANIPULATION MASTERCLASS
// Author: Harshit Kumar
// Purpose: Teach every essential DOM concept with examples.
// ==========================================================

// ----------------------------
// 1. Selecting Elements
// ----------------------------

// Methods:
// document.getElementById()      -> Select by ID (fastest)
// document.getElementsByClassName() -> Select by class (HTMLCollection)
// document.getElementsByTagName()   -> Select by tag
// document.querySelector()          -> Select first matching element (modern, flexible)
// document.querySelectorAll()       -> Select all matches (NodeList)

document.getElementById("selectBtn").addEventListener("click", () => {
  const p1 = document.getElementById("p1");
  const pClass = document.querySelector(".pClass");

  // Manipulating class list
  p1.classList.add("highlight");
  pClass.classList.add("highlight");

  console.log("Selected Elements:", p1, pClass);
});

// ----------------------------
// 2. Creating and Inserting Elements
// ----------------------------
// document.createElement(tagName) -> create new element
// parent.appendChild(child)
// parent.append(child1, child2)
// parent.prepend(child)
// element.insertBefore(newNode, referenceNode)
// element.insertAdjacentHTML(position, html)

document.getElementById("createBtn").addEventListener("click", () => {
  const newDiv = document.createElement("div");
  newDiv.textContent = "I am a new DIV!";
  newDiv.style.backgroundColor = "#4caf50";
  newDiv.style.color = "white";
  newDiv.style.padding = "10px";
  newDiv.style.marginTop = "10px";

  document.getElementById("container").appendChild(newDiv);
});

// ----------------------------
// 3. Removing Elements
// ----------------------------
// element.remove() -> directly removes element
// parent.removeChild(child) -> traditional way

document.getElementById("removeBtn").addEventListener("click", () => {
  const container = document.getElementById("container");
  if (container.lastChild) {
    container.lastChild.remove();
  } else {
    alert("No elements left to remove!");
  }
});

// ----------------------------
// 4. Changing Styles and Classes
// ----------------------------
// element.style.property = value
// element.classList.add/remove/toggle/contains()

document.getElementById("styleBtn").addEventListener("click", () => {
  const box = document.getElementById("colorBox");
  box.style.backgroundColor =
    box.style.backgroundColor === "tomato" ? "blue" : "tomato";
  box.classList.toggle("highlight");
});

// ----------------------------
// 5. Working with Attributes
// ----------------------------
// element.getAttribute(name)
// element.setAttribute(name, value)
// element.removeAttribute(name)
// element.hasAttribute(name)

document.getElementById("attrBtn").addEventListener("click", () => {
  const img = document.getElementById("image");
  const current = img.getAttribute("src");
  const newSrc =
    current === "https://via.placeholder.com/100"
      ? "https://via.placeholder.com/150/0000FF/FFFFFF?text=Updated"
      : "https://via.placeholder.com/100";
  img.setAttribute("src", newSrc);
});

// ----------------------------
// 6. Event Handling
// ----------------------------
// element.addEventListener(eventType, callback)
// Common events: click, mouseover, input, change, keydown, submit, etc.
// Remove with: element.removeEventListener(eventType, callback)

document.getElementById("eventBtn").addEventListener("click", (e) => {
  e.target.textContent = "Clicked!";
  e.target.style.backgroundColor = "green";
});

// ----------------------------
// 7. Input & Form Manipulation
// ----------------------------
// element.value -> get/set input value
// element.placeholder, element.disabled, element.focus()

document.getElementById("inputBtn").addEventListener("click", () => {
  const value = document.getElementById("inputField").value.trim();
  const result = document.getElementById("inputResult");

  result.textContent = value
    ? `You typed: ${value}`
    : "Please type something first!";
});

// ----------------------------
// 8. Traversing the DOM
// ----------------------------
// parentNode / children / firstChild / lastChild
// previousSibling / nextSibling
// parentElement / nextElementSibling / previousElementSibling
// querySelectorAll to loop through children

document.getElementById("traverseBtn").addEventListener("click", () => {
  const list = document.getElementById("list");
  const items = list.children;

  for (let item of items) {
    item.classList.toggle("highlight");
  }

  console.log("Parent Node:", list.parentNode);
  console.log("First Child:", list.firstElementChild.textContent);
});

// ----------------------------
// 9. innerHTML vs textContent
// ----------------------------
// innerHTML -> parses HTML tags (insecure if user data injected!)
// textContent -> safe, treats everything as text

document.getElementById("contentBtn").addEventListener("click", () => {
  const p = document.getElementById("contentP");
  alert(`innerHTML: ${p.innerHTML}\ntextContent: ${p.textContent}`);
});

// ----------------------------
// 10. Event Delegation (Performance Technique)
// ----------------------------
// Instead of adding event to every child, attach one to parent.
// Use e.target to know which child was clicked.

document.getElementById("delegationList").addEventListener("click", (e) => {
  if (e.target.tagName === "LI") {
    e.target.classList.toggle("highlight");
    console.log(`You clicked on: ${e.target.textContent}`);
  }
});

// ==========================================================
// Extra Useful Notes for DOM Manipulation:
// ==========================================================
// - The DOM (Document Object Model) is a tree-like structure of your HTML.
// - You can modify structure, styles, and content dynamically using JavaScript.
// - Always wait for DOM to load before manipulating (use defer in script tag or DOMContentLoaded event).
// - Avoid using innerHTML to inject user data (security risk - XSS).
// - Use querySelector/querySelectorAll for modern, flexible selection.
// - classList and style are your friends for dynamic UI.
// - Always clean up event listeners if you remove elements dynamically.
// ==========================================================
