const inputBox = document.getElementById("inputBox");
const toFahrenheit = document.getElementById("toFahrenheit");
const toCelsius = document.getElementById("toCelsius");
const result = document.getElementById("result");
let temp;

function convert() {
  if (toFahrenheit.checked) {
    // temp is value within textBox, converted to a number
    temp = Number(textBox.value);
    temp = temp * 9 / 5 + 32;
    // .toFixed adds extra decimal places to output.
    // In this case, one decimal place
    result.textContent = temp.toFixed(1) + "°F";
  }
  else if (toCelsius.checked) {
    temp = Number(textBox.value);
    temp = (temp - 32) * (5/9);
    result.textContent = temp.toFixed(1) + "°C";
  }
  else {
    result.textContent = "Select a unit";
  }
  
}