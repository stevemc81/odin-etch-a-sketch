const container = document.querySelector(".container");

for (let i = 0; i < (16 * 16); i++) {
    const box = document.createElement("div");
    box.classList.add("grid-square");
    box.addEventListener("mouseover", () => {
        box.style.backgroundColor = "black";
    })
    container.appendChild(box);
}