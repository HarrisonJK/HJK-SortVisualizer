//Bubble Sort w/ delay (delay need to be implemented and modularized)
export function bubbleSort(isSorting) {
  const bars = document.querySelectorAll(".bar");
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
        requestAnimationFrame(runBubbleSort); // delay function that is not working
      }, 100);
    } else {
      console.log("Bubble Sort Completed");
      isSorting = false; // Stop sorting when done

      const sortingButton = document.getElementById("toggle-sorting");
      sortingButton.textContent = "Start Sorting"; // Reset button text

      sortingButton.disabled = false;
    }
  }

  runBubbleSort(); // function runner
}
