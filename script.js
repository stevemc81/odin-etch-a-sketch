const gridSizeBtn = document.querySelector("#grid-size-btn");
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

function createGrid(size) {
    container.textContent = "";
    for (let i = 0; i < (size * size); i++) {
        const box = document.createElement("div");
        box.classList.add("grid-square");
        box.style.width = `${600 / size}px`;
        box.style.height = `${600 / size}px`;
        box.addEventListener("mouseover", () => {
            box.style.backgroundColor = "black";
        });
        container.appendChild(box);
    }
}