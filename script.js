// input Range
const arraySizeInput = document.getElementById("array-size");
const speedSizeInput = document.getElementById("speed");
const arrLabel = document.getElementById("arr-len");
const speedLabel = document.getElementById("speed-time");
// Btns
const ranBtn = document.getElementById("random-btn");
const bubble = document.getElementById("bubble");
const selection = document.getElementById("selection");
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

<<<<<<< HEAD
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

  const displayNumbers = (arr) => {
    stacksContainer.textContent = "";
    arr.forEach((number) => {
      stack = document.createElement("p");
      stacksContainer.appendChild(stack);
      stack.style.height = `${number}%`;
    });
  };

  const shuffleStacks = (array) => {
    isShuffled = true;
    array.sort(() => Math.random() - 0.5);
    displayNumbers(array);
  };
=======
    // displays stacks
    const displayNumbers = (arr, currentIndex, sortedIndex) => {
        stacksContainer.textContent = "";
        arr.forEach((number) => {
            stack = document.createElement("p");
            stacksContainer.appendChild(stack);
            stack.classList.add("sorted");
            stack.style.height = `${number}%`;
            if (number === sortedIndex) {
                stack.style.background = "red";
                console.log(currentIndex + "aa");
            }
            if (currentIndex === number) {
                stack.style.background = "white";
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
>>>>>>> quickSort

  const createArray = (arrayInputValue) => {
    for (let i = 0; i < arrayInputValue; i++) {
      arraySize.push(i);
      arraySize.sort(() => Math.random() - 0.5);
    }
    displayNumbers(arraySize);
  };

<<<<<<< HEAD
  function Sleep(ms) {
    return new Promise((resolve) => setTimeout(resolve, ms));
  }

  createArray(arraySizeInput.value);

  bubble.addEventListener("click", async () => {
    console.log("click");
    for (let i = 0; i < arraySize.length; i++) {
      for (let j = 0; j < arraySize.length - 1; j++) {
        if (arraySize[j] > arraySize[j + 1]) {
          let temp = arraySize[j];
          arraySize[j] = arraySize[j + 1];
          arraySize[j + 1] = temp;
          await Sleep(delay);
          displayNumbers(arraySize);
        }
      }
      console.log("loop");
      await Sleep(delay);

      displayNumbers(arraySize);
    }
  });
  selection.addEventListener("click", async () => {
    console.log("click");
    const len = arraySize.length;
    for (let i = 0; i < len; i++) {
      let min = i;
      for (let j = i; j < len; j++) {
        if (arraySize[j] < arraySize[min]) min = j;
        await Sleep(delay);
        displayNumbers(arraySize);
      }
      if (min !== i) {
        let temp = arraySize[min];
        arraySize[min] = arraySize[i];
        arraySize[i] = temp;
      }
      await Sleep(delay);
      displayNumbers(arraySize);
    }
  });

  console.log("a");
  console.log("a");
  console.log("a");
  console.log("a");
  console.log("a");
  console.log("a");
  bubble.addEventListener("click", () => console.log("help"));
  console.log("a");
  console.log("a");
  console.log("a");
  console.log("a");
};
=======
    // loops trough every element i array and give them the color green.
    const displayGreen = () => {
        sortedStacks = document.querySelectorAll(".sorted");
        sortedStacks.forEach((item) => {
            item.style.background = "green";
        });
    };

    //! SORT

    // BubbleSort event
    bubble.addEventListener("click", async () => {
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
        displayGreen();
    });

    // selectionSort event
    selection.addEventListener("click", async () => {
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
    });
>>>>>>> quickSort

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
        await quickSortIterative(arraySize);
        displayNumbers(arraySize);
        displayGreen();
    });

    //! ON START
    createArray(arraySizeInput.value);
};
