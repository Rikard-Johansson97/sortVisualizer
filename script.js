// input Range
const arraySizeInput = document.getElementById("array-size");
const speedSizeInput = document.getElementById("speed");
const arrLabel = document.getElementById("arr-len");
const speedLabel = document.getElementById("speed-time");
// Btns
const ranBtn = document.getElementById("random-btn");
const bubble = document.getElementById("bubble");
const btn = document.querySelectorAll(".btn");
const selection = document.getElementById("selection");
const merge = document.getElementById("merge");
const quick = document.getElementById("quick");
// push stacks here
stacksContainer = document.querySelector(".stacks-container");
// array size
let arraySize = [];

let delay = speedSizeInput.value;
// shuffle
let isShuffled = false;
console.log(arraySizeInput.value);
window.onload = function () {
  ranBtn.addEventListener("click", () => {
    shuffleStacks(arraySize);
  });

  //Disable btn
  const disable = (disable) => {
    if (disable) {
      arraySizeInput.disabled = true;
      arraySizeInput.style.background = "#e53170";
      btn.forEach((item) => {
        item.disabled = true;
        item.style.background = "#e53170";
      });
    } else {
      arraySizeInput.disabled = false;
      arraySizeInput.style.background = "#1D7373";
      btn.forEach((item) => {
        item.disabled = false;
        item.style.background = "#107361";
      });
    }
  };

  // Displays array size
  arraySizeInput.addEventListener("change", (e) => {
    arrLabel.textContent = e.target.value;
    arraySize = [];
    createArray(e.target.value);
  });
  // Displays speed of iteration
  speedSizeInput.addEventListener("change", (e) => {
    speedLabel.textContent = e.target.value + "ms";
    delay = e.target.value;
  });

  // displays stacks
  const displayNumbers = (arr, currentIndex, sortedIndex) => {
    stacksContainer.textContent = "";
    arr.forEach((number) => {
      stack = document.createElement("p");
      stacksContainer.appendChild(stack);
      stack.classList.add("sorted");
      stack.style.height = `${number}%`;
      if (number === sortedIndex) {
        stack.style.background = "#e53170";
        console.log(currentIndex + "aa");
      }
      if (currentIndex === number) {
        stack.style.background = "#ff8906";
      }
    });
  };

  // randomizes the elements i array.
  const shuffleStacks = (array) => {
    isShuffled = true;
    array.sort(() => Math.random() - 0.5);
    displayNumbers(array);
  };

  // Creates array with unique numbers from 0 - arrayInputValue.
  const createArray = (arrayInputValue) => {
    for (let i = 0; i < arrayInputValue; i++) {
      arraySize.push(i);
      arraySize.sort(() => Math.random() - 0.5);
    }
    displayNumbers(arraySize);
  };

  function Sleep(ms) {
    return new Promise((resolve) => setTimeout(resolve, ms));
  }

  const mergeSort = async (array) => {
    if (array.length <= 1) {
      return array;
    }

    const mid = Math.floor(array.length / 2);
    const left = array.slice(0, mid);
    const right = array.slice(mid);

    const leftSorted = await mergeSort(left);
    const rightSorted = await mergeSort(right);
    return merges(leftSorted, rightSorted);
  };

  const merges = async (left, right) => {
    const result = [];

    let leftIndex = 0;
    let rightIndex = 0;

    while (leftIndex < left.length && rightIndex < right.length) {
      await Sleep(delay);
      if (left[leftIndex] < right[rightIndex]) {
        result.push(left[leftIndex]);

        leftIndex++;
      } else {
        result.push(right[rightIndex]);
        rightIndex++;
      }
      displayNumbers([
        ...result,
        ...left.slice(leftIndex),
        ...right.slice(rightIndex),
      ]);
    }

    return [...result, ...left.slice(leftIndex), ...right.slice(rightIndex)];
  };

  //   merge.addEventListener("click", async () => {
  //     disable(true);
  //     await mergeSort(arraySize);
  //     displayGreen();
  //     disable(false);
  //   });

  // loops trough every element i array and give them the color green.
  const displayGreen = () => {
    sortedStacks = document.querySelectorAll(".sorted");
    sortedStacks.forEach((item) => {
      item.style.background = "#7f5af0";
    });
  };

  //! SORT

  // BubbleSort event
  bubble.addEventListener("click", async () => {
    disable(true);

    console.log("click");
    for (let i = 0; i < arraySize.length; i++) {
      for (let j = 0; j < arraySize.length - 1; j++) {
        if (arraySize[j] > arraySize[j + 1]) {
          let temp = arraySize[j];
          arraySize[j] = arraySize[j + 1];
          arraySize[j + 1] = temp;
          await Sleep(delay);
          displayNumbers(arraySize, arraySize[i], temp);
        }
      }
      console.log("loop");
      await Sleep(delay);

      displayNumbers(arraySize, arraySize[i]);
    }
    disable(false);

    displayGreen();
  });

  // selectionSort event
  selection.addEventListener("click", async () => {
    disable(true);

    console.log("click");
    const len = arraySize.length;
    for (let i = 0; i < len; i++) {
      let min = i;
      for (let j = i; j < len; j++) {
        if (arraySize[j] < arraySize[min]) min = j;
        await Sleep(delay);
        displayNumbers(arraySize, arraySize[j], arraySize[min]);
      }
      if (min !== i) {
        let temp = arraySize[min];
        arraySize[min] = arraySize[i];
        arraySize[i] = temp;
      }
      await Sleep(delay);
      displayNumbers(arraySize);
    }
    displayGreen();
    disable(false);
  });

  // QUICK SORT

  async function quickSortIterative(arr) {
    // Creating an array that we'll use as a stack, using the push() and pop() functions
    STACKS = [];

    // Adding the entire initial array as an "unsorted subarray"
    STACKS.push(0);
    STACKS.push(arr.length - 1);

    // There isn't an explicit peek() function
    // The loop repeats as long as we have unsorted subarrays
    while (STACKS[STACKS.length - 1] >= 0) {
      // Extracting the top unsorted subarray
      end = STACKS.pop();
      start = STACKS.pop();
      pivotIndex = await partition(arr, start, end);
      // If there are unsorted elements to the "left" of the pivot,
      // we add that subarray to the STACKS so we can sort it later
      if (pivotIndex - 1 > start) {
        STACKS.push(start);
        STACKS.push(pivotIndex - 1);
      }

      // If there are unsorted elements to the "right" of the pivot,
      // we add that subarray to the STACKS so we can sort it later
      if (pivotIndex + 1 < end) {
        STACKS.push(pivotIndex + 1);
        STACKS.push(end);
      }
    }
  }

  async function partition(arr, start, end) {
    // Taking the last element as the pivot
    console.log("aaa");
    const pivotValue = arr[end];
    let pivotIndex = start;
    for (let i = start; i < end; i++) {
      if (arr[i] < pivotValue) {
        await Sleep(delay);
        // Swapping elements
        [arr[i], arr[pivotIndex]] = [arr[pivotIndex], arr[i]];
        // Moving to next element
        pivotIndex++;
        displayNumbers(arraySize, pivotIndex, arr[i]);
      }
    }

    // Putting the pivot value in the middle
    [arr[pivotIndex], arr[end]] = [arr[end], arr[pivotIndex]];
    console.log(pivotIndex);
    return pivotIndex;
  }

  quick.addEventListener("click", async () => {
    disable(true);
    await quickSortIterative(arraySize);
    displayNumbers(arraySize);
    displayGreen();
    disable(false);
  });

  //! ON START
  createArray(arraySizeInput.value);
};
