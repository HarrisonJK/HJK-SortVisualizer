import { bubbleSort } from "./sorting/bubbleSort.js";

let isSorting = false; //need as a baseline

// Generate random bars
export function generateRandomBars() {
  const barContainer = document.getElementById("bar-container");
  barContainer.innerHTML = ""; // Clear the existing bars

  // Get the value of the slider to generate the number of bars needed for where slider is
  const numberOfBars = document.getElementById("bar-count").value;

  // Generate the bars
  for (let i = 0; i < numberOfBars; i++) {
    const barHeight = Math.floor(Math.random() * 100) + 1; // Random height between 1 and 100
    const bar = document.createElement("div");
    bar.classList.add("bar");
    bar.style.height = `${barHeight}%`;
    bar.dataset.height = barHeight; // Storing for on hover
    barContainer.appendChild(bar);

    bar.addEventListener("mouseover", function (event) {
      const barValueDisplay = document.getElementById("bar-value-display");
      barValueDisplay.textContent = `${bar.dataset.height}`; //display based on stored value
      barValueDisplay.style.left = `${event.pageX + 10}px`; // Position value next to cursor
      barValueDisplay.style.top = `${event.pageY + 10}px`;
      barValueDisplay.style.display = "block"; // Make visible
    });

    bar.addEventListener("mouseout", function () {
      const barValueDisplay = document.getElementById("bar-value-display");
      barValueDisplay.style.display = "none"; // Hide off hover
    });
  }
}

// Function to toggle sorting
export function toggleSorting(isSorting, selectedAlgorithm, startSorting) {
  const sortingButton = document.getElementById("toggle-sorting");

  if (isSorting) {
    sortingButton.textContent = "Start Sorting";
    isSorting = false;
    console.log("Sorting Stopped");
  } else {
    sortingButton.textContent = "Stop Sorting";
    if (selectedAlgorithm) {
      startSorting(selectedAlgorithm);
    } else {
      alert("Please select a sorting algorithm!");
    }
    isSorting = true;
    console.log("Sorting Started");
  }
  return isSorting;
}
// Function to select an algorithm and highlight it
export function selectAlgorithm(algorithmName) {
  console.log("Algorithm selected:", algorithmName);
  const algorithmItems = document.querySelectorAll(".algorithm-item");
  algorithmItems.forEach((item) => item.classList.remove("selected"));

  const selectedItem = Array.from(algorithmItems).find(
    (item) => item.textContent.toLowerCase().replace(" ", "") === algorithmName
  );
  if (selectedItem) {
    selectedItem.classList.add("selected");
  }

  return algorithmName;
}

// Call selected sorting algorithm selected
export function startSorting(selectedAlgorithm) {
  console.log("Starting sorting with algorithm:", selectedAlgorithm);
  if (selectedAlgorithm === "bubbleSort") {
    bubbleSort(isSorting); // Pass isSorting to bubbleSort
  }
  // Add other sorting algorithms
}

export function toggleMenu() {
  const menu = document.getElementById("menu");
  menu.classList.toggle("collapsed");
}
