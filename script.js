const gridSizeBtn = document.querySelector("#grid-size-btn");
const resetBtn = document.querySelector("#reset-btn");
const container = document.querySelector(".container");


createGrid(16);

gridSizeBtn.addEventListener("click", () => {
    const gridSize = parseInt(prompt("Enter a whole number from 16 to 100 for the grid size:"));

    if (gridSize < 16 || gridSize > 100 || !Number.isInteger(gridSize)) {
        alert("Please enter a whole number between 16 and 100!")
    } else {
        createGrid(gridSize);
    }
});

resetBtn.addEventListener("click", () => {
    createGrid(16);
});

function createGrid(size) {
    container.textContent = "";
    for (let i = 0; i < (size * size); i++) {
        const box = document.createElement("div");
        box.classList.add("grid-square");
        box.style.width = `${600 / size}px`;
        box.style.height = `${600 / size}px`;
        box.addEventListener("mouseover", () => {
            const mode = document.querySelector("input[name='mode']:checked");
            switch (mode.value) {
                case "black":
                    box.style.backgroundColor = `black`;
                    box.style.opacity = 1;
                    break;
                case "random":
                    box.style.backgroundColor = `${randomColor()}`;
                    break;
                case "fade-in":
                    box.style.backgroundColor = `black`;
                    let currentOpacity = box.style.opacity;
                    if (currentOpacity) {
                        box.style.opacity = Number(currentOpacity) + 0.1;
                    } else {
                        box.style.opacity = 0.1;
                    }
                    break;
            }
        });
        container.appendChild(box);
    }
}

function randomNumber() {
    return Math.floor(Math.random() * 256);
}

function randomColor() {
    return `rgb(${randomNumber()}, ${randomNumber()}, ${randomNumber()})`;
}