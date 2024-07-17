const container = document.querySelector(".container");

function createGrid() {
  const cellsPerRow = +prompt("Enter dimensions (e.g. 4 for 4x4 grid): ", "4");
  const totalCellNumber = (cellsPerRow * cellsPerRow) + cellsPerRow;
  const rowCellsAndBreakDiv = cellsPerRow + 1;

  for (let i = 1; i < totalCellNumber; i++) {
    const div = document.createElement("div");
    div.classList.add("active");

    if (i % rowCellsAndBreakDiv === 0) {
      div.style.cssText = "border: 0px; height: 0px; width: 100%";
    } else {
      div.style.cssText = "border: 1px solid black; height: 2rem; width: 2rem";
    }
    container.appendChild(div);
  }
}

createGrid();