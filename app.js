const gridContainer = document.getElementById("grid-container");
const newGridButton = document.getElementById("new-grid-button");
const monochromeButton = document.getElementById("monochrome-button");
const colorfulButton = document.getElementById("colorful-button");
let mode = "monochrome";

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
      square.addEventListener("mouseenter", drawOnGrid);
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

function generateRandomColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

function drawOnGrid(e) {
  if (mode == "monochrome") {
    if (e.target.classList.contains("hovering-monochrome")) {
      e.target.style.setProperty("background-color", "whitesmoke");
    } else {
      e.target.style.setProperty("background-color", "black");
    }
    e.target.classList.remove("hovering-colorful");
    e.target.classList.toggle("hovering-monochrome");
  } else {
    if (e.target.classList.contains("hovering-colorful")) {
      e.target.style.setProperty("background-color", "whitesmoke");
    } else {
      e.target.style.setProperty("background-color", generateRandomColor());
    }
    e.target.classList.remove("hovering-monochrome");
    e.target.classList.toggle("hovering-colorful");
  }
}

newGridButton.addEventListener("click", newGrid);
monochromeButton.addEventListener("click", function () {
  mode = "monochrome";
});
colorfulButton.addEventListener("click", function () {
  mode = "colorful";
});

newGrid();
