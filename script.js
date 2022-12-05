const arraySizeInput = document.getElementById("array-size");
const speedSizeInput = document.getElementById("speed");
const arrLabel = document.getElementById("arr-len");
const speedLabel = document.getElementById("speed-time");
// Btns
const ranBtn = document.getElementById("random-btn");
const bubble = document.getElementById("bubble");
const selection = document.getElementById("selection");
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
};

console.log("TEST");
console.log("TEST");
console.log("TEST");
console.log("TEST");