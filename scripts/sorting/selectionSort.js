//Selection Sort w/ delay
export function selectionSort(isSorting, speed) {
  const bars = document.querySelectorAll(".bar");
  let barHeights = Array.from(bars).map((bar) => parseInt(bar.style.height)); // Get the initial heights of the bars
  let n = barHeights.length;
  let i = 0; // Outer loop index

  // Swap the bar heights
  function swap(index1, index2) {
    const temp = barHeights[index1];
    barHeights[index1] = barHeights[index2];
    barHeights[index2] = temp;

    // Swap bar elements in DOM
    bars[index1].style.height = `${barHeights[index1]}%`;
    bars[index2].style.height = `${barHeights[index2]}%`;

    //For on hover
    bars[index1].dataset.height = barHeights[index1];
    bars[index2].dataset.height = barHeights[index2];
  }

  function runSelectionSort() {
    if (i < n - 1) {
      let minIndex = i;

      // Find index of smallest element
      for (let j = i + 1; j < n; j++) {
        if (barHeights[j] < barHeights[minIndex]) {
          minIndex = j; //Update index of smallest element
        }
      }

      // Swap if the minimum is not in the correct position
      if (minIndex !== i) {
        swap(i, minIndex);
      }

      // Move to next index
      i++;

      let delay = 100; // Default speed
      if (speed === "slow") {
        delay = 200;
      } else if (speed === "medium") {
        delay = 150;
      }

      setTimeout(() => {
        requestAnimationFrame(runSelectionSort);
      }, delay);
    } else {
      console.log("Selection Sort Completed");
      isSorting = false; // Stop sorting when done

      const sortingButton = document.getElementById("toggle-sorting");
      sortingButton.textContent = "Start Sorting"; // Reset button text
      sortingButton.disabled = false;
    }
  }

  runSelectionSort(); // function runner
}
