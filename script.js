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

    function Sleep(ms, callback) {
        return new Promise((resolve) => setTimeout(resolve, ms));
    }

    const displayGreen = () => {
        sortedStacks = document.querySelectorAll(".sorted");
        console.log(sortedStacks);
        sortedStacks.forEach((item) => {
            item.style.background = "green";
        });
    };

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
                    displayNumbers(arraySize, arraySize[i], temp);
                }
            }
            console.log("loop");
            await Sleep(delay);

            displayNumbers(arraySize, arraySize[i]);
        }
        displayGreen();
    });
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
};
