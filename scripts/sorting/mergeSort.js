//Merge Sort w/ delay
export function mergeSort(isSorting, speed) {
  const bars = document.querySelectorAll(".bar");
  let barHeights = Array.from(bars).map((bar) => parseInt(bar.style.height)); // Get the initial heights of the bars
  const n = barHeights.length;

  let delay = 100; // Default speed
  if (speed === "slow") {
    delay = 200;
  } else if (speed === "medium") {
    delay = 150;
  }

  const animations = []; // Store animations for the merge process

  // Merge two sorted halves and record animations
  function merge(left, mid, right) {
    const leftArray = barHeights.slice(left, mid + 1);
    const rightArray = barHeights.slice(mid + 1, right + 1);

    let i = 0,
      j = 0,
      k = left;

    while (i < leftArray.length && j < rightArray.length) {
      if (leftArray[i] <= rightArray[j]) {
        animations.push({ index: k, height: leftArray[i] });
        barHeights[k++] = leftArray[i++];
      } else {
        animations.push({ index: k, height: rightArray[j] });
        barHeights[k++] = rightArray[j++];
      }
    }

    while (i < leftArray.length) {
      animations.push({ index: k, height: leftArray[i] });
      barHeights[k++] = leftArray[i++];
    }

    while (j < rightArray.length) {
      animations.push({ index: k, height: rightArray[j] });
      barHeights[k++] = rightArray[j++];
    }
  }

  // Recursive function for Merge Sort
  function mergeSortRecursive(left, right) {
    if (left < right) {
      const mid = Math.floor((left + right) / 2);

      mergeSortRecursive(left, mid);
      mergeSortRecursive(mid + 1, right);

      merge(left, mid, right); // Merge sorted halves
    }
  }

  function runMergeSort() {
    if (animations.length === 0) {
      console.log("Merge Sort Completed");
      isSorting = false;

      const sortingButton = document.getElementById("toggle-sorting");
      sortingButton.textContent = "Start Sorting";
      sortingButton.disabled = false;
      return;
    }

    const batchSize = 10; // Number of partitions per frame
    for (let i = 0; i < batchSize && animations.length > 0; i++) {
      const { index, height } = animations.shift();
      bars[index].style.height = `${height}%`;
      bars[index].dataset.height = height;
    }

    setTimeout(() => {
      requestAnimationFrame(runMergeSort); // delay function
    }, delay);
  }

  mergeSortRecursive(0, n - 1); // Populate the animations array
  runMergeSort(); // function runner
}
