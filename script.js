const container = document.querySelector(".container");
const gridSlider = document.getElementById("grid-range");
const gridSpanOutput = document.querySelector(".grid-slider-span");
const containerWidth = 20.8;


function createGrid() {
  container.textContent = "";
  gridSlider.addEventListener("input", (event)=> {
    gridSpanOutput.textContent = event.target.value;
    gridSpanOutput.textContent = gridSlider.value;
  });
  
  const cellsPerRow = +prompt("Enter dimensions (e.g. 4 for 4x4 grid): ", "16");
  let cellWidth = calculateCellWidth(cellsPerRow);
  const totalCellNumber = (cellsPerRow * cellsPerRow);

  for (let i = 0; i < totalCellNumber; i++) {
    const div = document.createElement("div");
    div.classList.add("active");
    div.style.cssText = `border: 0.1px solid black; height: ${cellWidth}rem; width: ${cellWidth}rem`;
    
    container.appendChild(div);
  }
}

function calculateCellWidth(cellsPerRow) {
  let finalCellWidth = (containerWidth / cellsPerRow);
  console.log(finalCellWidth);
  return finalCellWidth;
}

createGrid();