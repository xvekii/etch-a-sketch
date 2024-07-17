const container = document.querySelector(".container");
const gridSlider = document.getElementById("grid-range");
const gridSpanOutput = document.querySelector(".grid-slider-span");
const containerWidth = 20.8;
let cellsPerRow = 16;


gridSlider.addEventListener("input", (event)=> {
  gridSpanOutput.textContent = event.target.value;
  cellsPerRow = parseInt(event.target.value);
  createGrid();
});

container.addEventListener("click", (event)=> {
  let targetDiv = event.target;
  targetDiv.style.backgroundColor = "black";
});

function createGrid() {
  container.textContent = "";
  
  let cellWidth = calculateCellWidth(cellsPerRow);
  const totalCellNumber = cellsPerRow * cellsPerRow;

  for (let i = 0; i < totalCellNumber; i++) {
    const div = document.createElement("div");
    div.classList.add("active");
    div.style.cssText = `height: ${cellWidth}rem; width: ${cellWidth}rem`;
    
    container.appendChild(div);
  }
}

function calculateCellWidth(cellsPerRow) {
  let finalCellWidth = containerWidth / cellsPerRow;
  console.log(finalCellWidth);
  return finalCellWidth;
}

createGrid();