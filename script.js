const container = document.querySelector(".container");
const gridSlider = document.getElementById("grid-range");
const gridSpanOutput = document.querySelector(".grid-slider-span");
const mainWrapper = document.querySelector(".main-wrapper");

const btnContainer = document.querySelector(".btn-container");
const rainbowBtn = document.querySelector(".rainbow-btn");
const colorPicker = document.getElementById("color-picker");
const colorBtn = document.querySelector(".color-btn");
const eraserBtn = document.querySelector(".eraser-btn");
const clearBtn = document.querySelector(".clear-btn");

const mediaQueryList = window.matchMedia("(min-width: 600px), (min-width: 900px), (min-width: 1600px)");

mediaQueryList.addEventListener("change", ()=> {
  createGrid();
});

let currentColor = "black";
let lastUsedColor = currentColor;
let rainbowModeOn = false;

let containerWidth = 20.8;
gridSpanOutput.textContent = `16 x 16`;
let cellsPerRow = 16;


gridSlider.addEventListener("input", (event)=> {
  let sliderValue = event.target.value;
  gridSpanOutput.textContent = `${sliderValue} x ${sliderValue}`;
  cellsPerRow = parseInt(event.target.value);
  createGrid();
});

rainbowBtn.addEventListener("click", (event)=> {
  toggleClickedBtnStyle(event);
  rainbowModeOn = !rainbowModeOn;
});

function toggleClickedBtnStyle(event) {
  event.target.classList.toggle("last-switched-on");
  const buttonList = btnContainer.getElementsByClassName("selected");
  
  Array.from(buttonList).forEach(button => {
    if (button !== event.target) {
      button.classList.remove("last-switched-on");
    }
  });
}

mainWrapper.addEventListener("click", (event)=> {
  let targetDiv = event.target;
  if (targetDiv.classList.contains("active")) {
    if (rainbowModeOn) {
      currentColor = getRandomColor();
      targetDiv.style.backgroundColor = currentColor;
    } else {
      targetDiv.style.backgroundColor = currentColor;
    }
  }
});

colorPicker.addEventListener("input", watchColorChange, false);

function watchColorChange(event) {
  rainbowModeOn = false;
  currentColor = event.target.value;
}

colorBtn.addEventListener("click", (event)=> {
  toggleClickedBtnStyle(event);
  rainbowModeOn = false;
  currentColor = colorPicker.value;
});

eraserBtn.addEventListener("click", (event)=> {
  toggleClickedBtnStyle(event);
  rainbowModeOn = false;
  currentColor = "#FFFFFF";
});

clearBtn.addEventListener("click", ()=> { 
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
  let newContainerWidth = container.getBoundingClientRect();
  containerWidth = newContainerWidth.width;

  let finalCellWidthInPx = containerWidth / cellsPerRow;
  
  let rootFontSize = parseFloat(getComputedStyle(document.documentElement).fontSize);
  let finalCellWidthInRem = finalCellWidthInPx / rootFontSize;
  
  return finalCellWidthInRem;
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