var currentNumberWrapper = document.getElementById("currentNumber");
currentNumber = 0;

function increment() {
  currentNumber = currentNumber + 1;
  currentNumberWrapper.innerHTML = currentNumber;
  document.getElementById("currentNumber").style.color = "#000000";
  
}

function decrement() {
  if (currentNumber <= 0) {
    currentNumber = currentNumber - 1;
    currentNumberWrapper.innerHTML = currentNumber;
    document.getElementById("currentNumber").style.color = "#ff0000";
    document.getElementById("currentNumber").style.fontWeight = "bold";
  } else {
    currentNumber = currentNumber - 1;
    currentNumberWrapper.innerHTML = currentNumber;
    document.getElementById("currentNumber").style.color = "#000000";
  }
}
