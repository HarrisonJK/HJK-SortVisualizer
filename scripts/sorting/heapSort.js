//Heap Sort w/ delay
export function heapSort(isSorting, speed) {
  const bars = document.querySelectorAll(".bar");
  let barHeights = Array.from(bars).map((bar) => parseInt(bar.style.height)); // Get the initial heights of the bars
  const n = barHeights.length;

  let delay = 100; // Default speed
  if (speed === "slow") {
    delay = 200;
  } else if (speed === "medium") {
    delay = 150;
  }

  const animations = []; // Store animations for heapify process

  //Swap the bar heights
  function swap(i, j) {
    const temp = barHeights[i];
    barHeights[i] = barHeights[j];
    barHeights[j] = temp;

    animations.push({
      index1: i,
      index2: j,
      height1: barHeights[i],
      height2: barHeights[j],
    });
  }

  // Function to heapify a subtree rooted at index i
  function heapify(size, rootIndex) {
    let largest = rootIndex; // Initialize largest as root
    const left = 2 * rootIndex + 1; // Left child
    const right = 2 * rootIndex + 2; // Right child

    // If left child is larger than root
    if (left < size && barHeights[left] > barHeights[largest]) {
      largest = left;
    }

    // If right child is larger than largest so far
    if (right < size && barHeights[right] > barHeights[largest]) {
      largest = right;
    }

    // If largest is not root
    if (largest !== rootIndex) {
      swap(rootIndex, largest); // Swap root with largest
      heapify(size, largest); // Recursively heapify the affected subtree
    }
  }

  function buildMaxHeap() {
    for (let i = Math.floor(n / 2) - 1; i >= 0; i--) {
      heapify(n, i);
    }
  }

  function performHeapSort() {
    buildMaxHeap();

    for (let i = n - 1; i > 0; i--) {
      swap(0, i); // Move current root to end
      heapify(i, 0); // Heapify the reduced heap
    }
  }

  function runHeapSort() {
    if (animations.length === 0) {
      console.log("Heap Sort Completed");
      isSorting = false;

      const sortingButton = document.getElementById("toggle-sorting");
      sortingButton.textContent = "Start Sorting";
      sortingButton.disabled = false;
      return;
    }

    const batchSize = 10; // Number of partitions per frame
    for (let i = 0; i < batchSize && animations.length > 0; i++) {
      const { index1, index2, height1, height2 } = animations.shift();
      bars[index1].style.height = `${height1}%`;
      bars[index1].dataset.height = height1;
      bars[index2].style.height = `${height2}%`;
      bars[index2].dataset.height = height2;
    }

    setTimeout(() => {
      requestAnimationFrame(runHeapSort); // delay function
    }, delay);
  }

  performHeapSort(); // Populate animations array
  runHeapSort(); // function runner
}
