const grid = document.querySelector("#grid");

function appendSquare(parent) {
    const square = document.createElement("div");
    square.setAttribute("class", "square");
    parent.appendChild(square);
}

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
}

function addHoverEffect() {
    grid.addEventListener("click", (event) => {
        let target = event.target;
        if (target.className != "square") return;
        target.style.backgroundColor = "black"
    })
    };

function removeGrid() {
    rows = document.querySelectorAll(".row");
    rows.forEach(row => {
        row.remove();
    })
}

let squares;

document.addEventListener("load", squares = createGrid(16));
addHoverEffect();

newGrid = document.querySelector("#newGrid");
newGrid.addEventListener("click", function createNewGrid() {
    const dimension = prompt("Set the dimension of the new grid", 16);
    removeGrid();
    squares = createGrid(dimension);
})