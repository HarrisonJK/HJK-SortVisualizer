import {
  generateRandomBars,
  toggleSorting,
  selectAlgorithm,
  startSorting,
  toggleMenu,
} from "./visualizer.js";

let selectedAlgorithm = null;
let isSorting = false;

// Event listener for number of bars input
document
  .getElementById("bar-count")
  .addEventListener("input", function (event) {
    const barCount = event.target.value;
    document.getElementById("bar-count-value").textContent = barCount;
    generateRandomBars(); // Call generateRandomBars directly to update bars based on slider value
  });

// Event listener for generating bars
document
  .getElementById("generate-bars")
  .addEventListener("click", generateRandomBars);

// Event listener for sorting button
document
  .getElementById("toggle-sorting")
  .addEventListener("click", function () {
    // Toggle sorting status using the toggleSorting function
    isSorting = toggleSorting(isSorting, selectedAlgorithm, startSorting);
  });

// Event listener for toggle menu button
document.getElementById("toggleButton").addEventListener("click", toggleMenu);

// Event listener for algorithm selection
document.querySelectorAll(".algorithm-item").forEach((item) => {
  item.addEventListener("click", function (event) {
    const algorithmName = event.target.dataset.algorithm;
    selectedAlgorithm = selectAlgorithm(algorithmName); // Set selected algorithm
  });
});
