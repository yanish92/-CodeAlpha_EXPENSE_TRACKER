import BudgetTracker from "./BudgetTracker.js";

setTimeout(() => {
  const heading = document.getElementById("animate-heading");
  heading.classList.add("animate");
}, 500);

new BudgetTracker("#app");
