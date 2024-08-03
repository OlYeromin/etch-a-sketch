const GRIDSIZE = 400;
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
}

document.addEventListener("load", createGrid(16));

newGrid = document.querySelector("#newGrid");
newGrid.addEventListener("click", function createNewGrid() {
    const dimension = prompt("Set the dimension of the new grid", 16);
    removeGrid();
    createGrid(dimension);
})

squares = document.querySelectorAll(".square");
squares.forEach(square => {
    square.addEventListener("click", (event) => {
        event.target.style.backgroundColor = "black"})
});