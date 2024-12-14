// import { bubbleSort } from "./sorting/bubbleSort.js";
//need to change scripts to module in order to be able to import algorithms modularly

let selectedAlgorithm = null; //need to force selection from user
let isSorting = false; //need as a baseline

// Generate random bars
function generateRandomBars() {
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
    barContainer.appendChild(bar);
  }
}

// Function to toggle sorting
function toggleSorting() {
  const sortingButton = document.getElementById("toggle-sorting");

  if (isSorting) {
    sortingButton.textContent = "Start Sorting";
    isSorting = false;
    console.log("Sorting Stopped");
    // unsure why this is not changing button to stop sorting and logging come back to it
  } else {
    sortingButton.textContent = "Stop Sorting";
    if (selectedAlgorithm) {
      startSorting();
    } else {
      alert("Please select a sorting algorithm!");
    }
    isSorting = true;
    console.log("Sorting Started");
  }
}

// Function to select an algorithm and highlight it
function selectAlgorithm(algorithmName) {
  const algorithmItems = document.querySelectorAll(".algorithm-item");
  algorithmItems.forEach((item) => item.classList.remove("selected"));
  // highlight not working on document itself but it works when clicked

  const selectedItem = document.querySelector(
    `li[onclick="selectAlgorithm('${algorithmName}')"]`
  );
  selectedItem.classList.add("selected");

  selectedAlgorithm = algorithmName;
}

// Function to perform bubble sort w/ delay (delay need to be implemented and modularized)
function bubbleSort() {
  const bars = document.querySelectorAll(".bar");
  let barHeights = Array.from(bars).map((bar) => parseInt(bar.style.height)); // initial heights of the bars
  let n = barHeights.length;
  let swapped;

  // Swap function to update the heights of the bars
  function swap(i, j) {
    const temp = barHeights[i];
    barHeights[i] = barHeights[j];
    barHeights[j] = temp;

    // Update the DOM w/ new heights
    bars[i].style.height = `${barHeights[i]}%`;
    bars[j].style.height = `${barHeights[j]}%`;
  }

  // Run bubble sort w/ delay
  function runBubbleSort() {
    swapped = false;

    for (let i = 0; i < n - 1; i++) {
      if (barHeights[i] > barHeights[i + 1]) {
        swap(i, i + 1);
        swapped = true;
      }
    }
    n--;

    if (swapped) {
      setTimeout(() => {
        requestAnimationFrame(runBubbleSort); //continue sorting after delay
      }, 100); // Set the delay here
    } else {
      console.log("Bubble Sort Completed");
      isSorting = false;
    }
  }

  runBubbleSort(); // Start the bubble sort
}

// Call selected sorting algorithm selected
function startSorting() {
  if (selectedAlgorithm === "bubbleSort") {
    bubbleSort();
  }
  // Add other sorting algorithms
}

// Event listener for number of bars input
document
  .getElementById("bar-count")
  .addEventListener("input", function (event) {
    const barCount = event.target.value;
    document.getElementById("bar-count-value").textContent = barCount;
    generateRandomBars(); // Call generateRandomBars directly to update bars based on slider value
  });

// Event listener for sorting button
document
  .getElementById("toggle-sorting")
  .addEventListener("click", function () {
    if (!isSorting) {
      startSorting();
      isSorting = true;
      document.getElementById("toggle-sorting").textContent = "Stop Sorting";
    } else {
      isSorting = false;
      document.getElementById("toggle-sorting").textContent = "Start Sorting";
    }
  });
