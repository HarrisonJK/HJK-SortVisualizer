//Bubble Sort w/ delay
export function bubbleSort(isSorting, speed) {
  const bars = document.querySelectorAll(".bar");
  let barHeights = Array.from(bars).map((bar) => parseInt(bar.style.height)); // Get the initial heights of the bars
  let n = barHeights.length;
  let swapped;

  //Swap the bar heights
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

  function runBubbleSort() {
    swapped = false;

    for (let i = 0; i < n - 1; i++) {
      if (barHeights[i] > barHeights[i + 1]) {
        swap(i, i + 1);
        swapped = true;
      }
    }
    n--;

    let delay = 100; // Default speed
    if (speed === "slow") {
      delay = 200;
    } else if (speed === "medium") {
      delay = 150;
    }

    if (swapped) {
      setTimeout(() => {
        requestAnimationFrame(runBubbleSort); // delay function
      }, delay);
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
