const grid = document.querySelector("#grid");

isMouseDown = false;

function appendSquare(parent) {
    const square = document.createElement("div");
    square.setAttribute("class", "square");
    parent.appendChild(square);
};

function createGrid(dimension) {
    for (let i = 0; i < dimension; i++) {
        const row = document.createElement("div");
        row.setAttribute("class", "row");
        for (let j = 0; j < dimension; j++) {
            appendSquare(row);
        }
        grid.appendChild(row);
    }
    return document.querySelectorAll(".square");
};

function colorSquare(target) {
    if (!target.classList.contains("square")) return;
    if (!target.classList.contains("colored")) {
        target.classList.add("colored");
        target.style.opacity = 0.1;
    }
}

function addHoverEffect() {
    grid.addEventListener("mousedown", (event) => {
        isMouseDown = true;
        colorSquare(event.target);
    });
    grid.addEventListener("mouseover", (event) => {
        if (isMouseDown) {
            colorSquare(event.target);
        }
    });
    document.addEventListener("mouseup", (event) => {
        isMouseDown = false;
    });
};

function removeGrid() {
    rows = document.querySelectorAll(".row");
    rows.forEach(row => {
        row.remove();
    })
};

let squares;

document.addEventListener("load", squares = createGrid(16));
addHoverEffect();

newGrid = document.querySelector("#newGrid");
newGrid.addEventListener("click", function createNewGrid() {
    const dimension = prompt("Set the dimension of the new grid", 16);
    removeGrid();
    squares = createGrid(dimension);
})