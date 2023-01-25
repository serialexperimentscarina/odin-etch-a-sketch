const gridContainer = document.getElementById("grid-container");
const newGridButton = document.getElementById("new-grid-button");

function buildGrid(gridSize) {
  gridContainer.innerHTML = "";
  for (let i = 0; i < gridSize; i++) {
    let row = document.createElement("div");
    row.className = "row";
    row.style.height = `${560 / gridSize}px`;
    for (let j = 0; j < gridSize; j++) {
      let square = document.createElement("div");
      square.className = "square";
      square.style.width = `${560 / gridSize}px`;
      square.addEventListener("mouseenter", function (e) {
        e.target.classList.toggle("hovering");
      });
      row.appendChild(square);
    }
    gridContainer.appendChild(row);
  }
}

function newGrid() {
  let gridSize;
  do {
    gridSize = prompt("How many squares per side should your grid have?", 16);
    if (gridSize == null) {
      return;
    }
    if (isNaN(gridSize) || gridSize <= 0 || gridSize > 100) {
      alert("Invalid input! Your value should be a number between 0 and 100!");
    }
  } while (isNaN(gridSize) || gridSize <= 0 || gridSize > 100);
  buildGrid(gridSize);
}

newGridButton.addEventListener("click", newGrid);

newGrid();
