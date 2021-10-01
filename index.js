var numberInput = document.querySelector(".number-input");
var output = document.querySelector(".output");
numberInput.addEventListener("input", changeHandler);

function changeHandler() {
  //   console.log("changed");
  //   console.log(numberInput.value);
  var userInputNumber = Number(numberInput.value);
  if (userInputNumber % 2 == 0) {
    output.innerText = "The Number " + userInputNumber + " is an even number ";
    output.style.color = "red";
  } else {
    output.innerText = "The Number " + userInputNumber + " is an odd number ";
    output.style.color = "green";
  }
}
