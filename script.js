const GRIDSIZE = 400;
const grid = document.querySelector("#grid");

function appendSquare() {
    const square = document.createElement("div");
    square.setAttribute("class", "square");
    grid.appendChild("square");
}