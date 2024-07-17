const container = document.querySelector(".container");
const gridSlider = document.getElementById("grid-range");
const gridSpanOutput = document.querySelector(".grid-slider-span");


function createGrid() {
  container.textContent = "";
  gridSlider.addEventListener("input", (event)=> {
    gridSpanOutput.textContent = event.target.value;
    gridSpanOutput.textContent = gridSlider.value;
  });
  
  const cellsPerRow = +prompt("Enter dimensions (e.g. 4 for 4x4 grid): ", "6");
  let containerWidth = calculateContainerWidth(cellsPerRow);
  setContainerWidth(containerWidth);
  const totalCellNumber = (cellsPerRow * cellsPerRow);
  const rowCellsAndBreakDiv = cellsPerRow + 1;

  for (let i = 0; i < totalCellNumber; i++) {
    const div = document.createElement("div");
    div.classList.add("active");

    
    div.style.cssText = "border: 0.1px solid black; height: 2rem; width: 2rem";
    
    container.appendChild(div);
  }
}

function calculateContainerWidth(userInput) {
  let containerWidth = (userInput * 2) + 4;
  console.log(containerWidth);
  return containerWidth;
}

function setContainerWidth(width) {
  container.style.width = `${width}rem`;
  // container.style.paddingRight = "2rem";
}

createGrid();