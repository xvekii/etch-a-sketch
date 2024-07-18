const container = document.querySelector(".container");
const gridSlider = document.getElementById("grid-range");
const gridSpanOutput = document.querySelector(".grid-slider-span");
const mainWrapper = document.querySelector(".main-wrapper");
const rainbowBtn = document.querySelector(".rainbow-btn");
const colorPicker = document.getElementById("color-picker");
const eraserBtn = document.querySelector(".eraser-btn");
const clearBtn = document.querySelector(".clear-btn");

let currentColor = "black";
let lastUsedColor = currentColor;
let rainbowModeOn = false;

const containerWidth = 20.8;
gridSpanOutput.textContent = `16 x 16`;
let cellsPerRow = 16;


gridSlider.addEventListener("input", (event)=> {
  let sliderValue = event.target.value;
  gridSpanOutput.textContent = `${sliderValue} x ${sliderValue}`;
  cellsPerRow = parseInt(event.target.value);
  createGrid();
});

rainbowBtn.addEventListener("click", ()=> {
  eraserBtn.style.backgroundColor = "#FFFFFF";
  rainbowModeOn = !rainbowModeOn;
});

mainWrapper.addEventListener("click", (event)=> {
  let targetDiv = event.target;
  if (targetDiv.classList.contains("active")) {
    if (rainbowModeOn) {
      currentColor = getRandomColor();
      colorPicker.value = currentColor;
      targetDiv.style.backgroundColor = currentColor;
    } else {
      targetDiv.style.backgroundColor = currentColor;
    }
  }
});

colorPicker.addEventListener("input", watchColorChange, false);

function watchColorChange(event) {
  rainbowModeOn = false;
  eraserBtn.style.backgroundColor = "#FFFFFF";
  currentColor = event.target.value;
  console.log(currentColor);
}

eraserBtn.addEventListener("click", (event)=> {
  let eraserBtncurrentBG = window.getComputedStyle(event.target).backgroundColor;
  lastUsedColor = currentColor;
  console.log(eraserBtncurrentBG);
  if (eraserBtncurrentBG === "rgb(255, 255, 255)") {
    eraserBtn.style.backgroundColor = lastUsedColor;
    currentColor = "#FFFFFF";
  } else {
    currentColor = eraserBtncurrentBG;
    eraserBtn.style.backgroundColor = "#FFFFFF";
  }

  
});

clearBtn.addEventListener("click", ()=> { 
  eraserBtn.style.backgroundColor = "#FFFFFF";
  createGrid();
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
  return finalCellWidth;
}

function getRandomColor() {
  let letters = "0123456789ABCDEF";
  let color = "#";

  for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}

createGrid();