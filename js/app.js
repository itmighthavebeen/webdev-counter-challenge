"use strict";

let count = 0;

const countElement = document.querySelector(".count");
const incrementBtn = document.querySelector(".increment-btn");
const resetBtn = document.querySelector(".reset-btn");
const decrementBtn = document.querySelector(".decrement-btn");

// JavaScript to Trap Focus
document.addEventListener("DOMContentLoaded", function () {
  const mainContent = document.querySelector("main"); // Select the main content area
  const focusableElements = mainContent.querySelectorAll(
    'button, [tabindex="0"]'
  ); // Select all focusable elements
  const firstFocusableElement = focusableElements[0];
  const lastFocusableElement = focusableElements[focusableElements.length - 1];

  // Add keydown event listener to trap the focus
  mainContent.addEventListener("keydown", function (event) {
    // If the Tab key is pressed
    if (event.key === "Tab") {
      // If Shift + Tab is pressed (to go backwards)
      if (event.shiftKey) {
        // If focus is on the first focusable element, cycle to the last element
        if (document.activeElement === firstFocusableElement) {
          lastFocusableElement.focus();
          event.preventDefault(); // Prevent default tabbing behavior
        }
      } else {
        // If focus is on the last focusable element, cycle to the first element
        if (document.activeElement === lastFocusableElement) {
          firstFocusableElement.focus();
          event.preventDefault(); // Prevent default tabbing behavior
        }
      }
    }
  });

  countElement.focus;

  function incrementCount() {
    // Write the relevant code in this block
    count++;
  }

  function decrementCount() {
    // Write the relevant code in this block
    count--;
  }

  function resetCount() {
    // Write the relevant code in this block
    count = 0;
  }

  function renderUpdatedCount() {
    countElement.innerText = count;
  }

  incrementBtn.addEventListener("click", function () {
    // Write code below this line
    incrementCount();
    // STOP HERE
    renderUpdatedCount();
  });

  resetBtn.addEventListener("click", function () {
    // Write code below this line
    resetCount();
    // STOP HERE
    renderUpdatedCount();
  });

  decrementBtn.addEventListener("click", function () {
    // Write code below this line
    decrementCount();
    // STOP HERE
    renderUpdatedCount();
  });
});
