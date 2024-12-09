// Bubble Sort Algorithm
function bubbleSort(barContainer) {
  const bars = barContainer.querySelectorAll(".bar");
  let barHeights = Array.from(bars).map((bar) => parseInt(bar.style.height)); // Get the initial heights of the bars
  let n = barHeights.length;
  let swapped;

  //swap the bar heights
  function swap(i, j) {
    const temp = barHeights[i];
    barHeights[i] = barHeights[j];
    barHeights[j] = temp;

    // Swap bar elements in DOM
    bars[i].style.height = `${barHeights[i]}%`;
    bars[j].style.height = `${barHeights[j]}%`;
  }
  swapped = false;

  for (let i = 0; i < n - 1; i++) {
    if (barHeights[i] > barHeights[i + 1]) {
      swap(i, i + 1); // swap
      swapped = true;
    }
  }
  n--;

  if (swapped) {
    setTimeout(() => {
      requestAnimationFrame(runBubbleSort); // delay function that is not working
    }, delay);
  } else {
    console.log("Bubble Sort Completed");
    isSorting = false; // Stop sorting when done
  }
}

runBubbleSort(); // function runner

// Export the function to make it available in other files to modularize
// export { bubbleSort };
