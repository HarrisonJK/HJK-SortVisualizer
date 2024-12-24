//Insertion Sort w/ delay
export function insertionSort(isSorting, speed) {
  const bars = document.querySelectorAll(".bar");
  let barHeights = Array.from(bars).map((bar) => parseInt(bar.style.height)); // Get the initial heights of the bars
  let n = barHeights.length;
  let i = 1; // Start from second element
  let j; // Inner loop index
  let key; // Current element being sorted

  function runInsertionSort() {
    if (i < n) {
      key = barHeights[i]; // Element to insert
      j = i - 1;

      // Shift elements of sorted to make space for the key(current element)
      while (j >= 0 && barHeights[j] > key) {
        barHeights[j + 1] = barHeights[j];

        // Update DOM for shifted number
        bars[j + 1].style.height = `${barHeights[j]}%`;
        bars[j + 1].dataset.height = barHeights[j];

        j--;
      }

      // Insert number at the correct position
      barHeights[j + 1] = key;

      // Update DOM for inserted number
      bars[j + 1].style.height = `${key}%`;
      bars[j + 1].dataset.height = key;

      i++;

      let delay = 100; // Default speed
      if (speed === "slow") {
        delay = 200;
      } else if (speed === "medium") {
        delay = 150;
      }

      setTimeout(() => {
        requestAnimationFrame(runInsertionSort);
      }, delay);
    } else {
      console.log("Insertion Sort Completed");
      isSorting = false;

      const sortingButton = document.getElementById("toggle-sorting");
      sortingButton.textContent = "Start Sorting"; // Reset button text
      sortingButton.disabled = false;
    }
  }

  runInsertionSort(); // function runner
}
