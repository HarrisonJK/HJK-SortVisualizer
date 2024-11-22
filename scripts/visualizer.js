// Random Bar Generator
function generateRandomBars() {
  const barContainer = document.getElementById("bar-container");
  barContainer.innerHTML = "";

  const numberOfBars = 30;
  for (let i = 0; i < numberOfBars; i++) {
    const barHeight = Math.floor(Math.random() * 100) + 10;
    const bar = document.createElement("div");
    bar.classList.add("bar");
    bar.style.height = `${barHeight}%`;
    barContainer.appendChild(bar);
  }
}

// Bar Slider Input
function updateNumberOfBars(value) {
  const barContainer = document.getElementById("bar-container");
  barContainer.innerHTML = "";

  for (let i = 0; i < value; i++) {
    const barHeight = Math.floor(Math.random() * 100) + 10;
    const bar = document.createElement("div");
    bar.classList.add("bar");
    bar.style.height = `${barHeight}%`;
    barContainer.appendChild(bar);
  }
}

// Placeholder for sorting speed function
function updateSortingSpeed(speed) {
  console.log(`Sorting speed is set to: ${speed}`);
}

// Track if sorting is in progress
let isSorting = false;

// Toggle Start/Stop Sorting
function toggleSorting() {
  const sortingButton = document.getElementById("toggle-sorting");

  if (isSorting) {
    sortingButton.textContent = "Start Sorting";
    console.log("Sorting Stopped");
    isSorting = false;
  } else {
    sortingButton.textContent = "Stop Sorting";
    startSorting();
    isSorting = true;
    console.log("Sorting Started");
  }
}

// sorting placeholder
function startSorting() {
  const algorithm = document.querySelector(".menu-content ul li.selected");
  if (!algorithm) {
    alert("Please select a sorting algorithm!");
    return;
  }

  console.log(`Starting ${algorithm.textContent.trim()}...`);
  // Add sorting algorithm logic
}

//  bar count listener
document
  .getElementById("bar-count")
  .addEventListener("input", function (event) {
    const barCount = event.target.value;
    document.getElementById("bar-count-value").textContent = barCount;
    updateNumberOfBars(barCount);
  });

//  sorting speed listener
const speedRadioButtons = document.getElementsByName("speed");
speedRadioButtons.forEach((radio) => {
  radio.addEventListener("change", function (event) {
    updateSortingSpeed(event.target.value);
  });
});
