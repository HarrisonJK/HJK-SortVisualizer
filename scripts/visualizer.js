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

function startSorting() {
  const algorithm = document.querySelector(".menu-content ul li.selected");
  if (!algorithm) {
    alert("Please select a sorting algorithm!");
    return;
  }

  console.log(`Starting ${algorithm.textContent.trim()}...`);
}
