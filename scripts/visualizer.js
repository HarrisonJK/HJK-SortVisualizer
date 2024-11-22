function generateRandomBars() {
  const barContainer = document.getElementById("bar-container");
  barContainer.innerHTML = ""; // Clear any existing bars

  const numberOfBars = 30; // Number of bars to generate (will be variable in the future)
  for (let i = 0; i < numberOfBars; i++) {
    const barHeight = Math.floor(Math.random() * 100) + 10; // Random height
    const bar = document.createElement("div");
    bar.classList.add("bar");
    bar.style.height = `${barHeight}%`;
    barContainer.appendChild(bar); // Add the bars to the container
  }
}

function startSorting() {
  const algorithm = document.querySelector(".menu-content ul li.selected");
  if (!algorithm) {
    alert("Please select a sorting algorithm!");
    return;
  }

  console.log(`Starting ${algorithm.textContent.trim()}...`); // Log the selected algorithm
}
