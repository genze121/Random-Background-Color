const captureButton = document.querySelector("button");
const backgroundColorChange = document.querySelector("body");

const colorArray = ["pink", "orange", "red", "violet"];

function generateColor() {
  const index = parseInt(Math.floor(Math.random() * colorArray.length));
  backgroundColorChange.style.backgroundColor = colorArray[index];
}

captureButton.addEventListener("click", generateColor);
