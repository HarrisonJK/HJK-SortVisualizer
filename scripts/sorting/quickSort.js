//Quick Sort w/ delay
export function quickSort(isSorting, speed) {
  const bars = document.querySelectorAll(".bar");
  let barHeights = Array.from(bars).map((bar) => parseInt(bar.style.height)); // Get the initial heights of the bars

  // Swap the bar heights
  function swap(i, j) {
    const temp = barHeights[i];
    barHeights[i] = barHeights[j];
    barHeights[j] = temp;

    // Swap bar elements in DOM
    bars[i].style.height = `${barHeights[i]}%`;
    bars[j].style.height = `${barHeights[j]}%`;

    //For on hover
    bars[i].dataset.height = barHeights[i];
    bars[j].dataset.height = barHeights[j];
  }

  // Partition function
  function partition(low, high) {
    const pivot = barHeights[high];
    bars[high].classList.add("pivot");
    let i = low - 1;

    for (let j = low; j < high; j++) {
      if (barHeights[j] < pivot) {
        i++;
        swap(i, j);
      }
    }
    swap(i + 1, high);
    bars[high].classList.remove("pivot");
    return i + 1;
  }

  // Stack for iterative Quick Sort
  let stack = [];
  stack.push({ low: 0, high: barHeights.length - 1 });

  let delay = 100; // Default speed
  if (speed === "slow") {
    delay = 200;
  } else if (speed === "medium") {
    delay = 150;
  }

  function runQuickSort() {
    let batchSize = 5; // Number of partitions per frame
    let processed = 0;

    while (stack.length > 0 && processed < batchSize) {
      const { low, high } = stack.pop();

      if (low < high) {
        const pivotIndex = partition(low, high);

        // Add left and right subarrays to the stack
        stack.push({ low: low, high: pivotIndex - 1 });
        stack.push({ low: pivotIndex + 1, high: high });
      }

      processed++;
    }

    if (stack.length > 0) {
      // Delay next batch
      setTimeout(() => {
        requestAnimationFrame(runQuickSort);
      }, delay);
    } else {
      console.log("Quick Sort Completed");

      isSorting = false;

      const sortingButton = document.getElementById("toggle-sorting");
      sortingButton.textContent = "Start Sorting"; // Reset button text
      sortingButton.disabled = false;
    }
  }

  runQuickSort(); // function runner
}
