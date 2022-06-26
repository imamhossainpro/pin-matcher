//  Get 4 Digit Pin Number
function getPin() {
  const pin = Math.round(Math.random() * 10000);
  const PinString = pin + "";
  if (PinString.length == 4) {
    return pin;
  } else {
    return getPin();
  }
}
// When Click Pin button, Generate a 4 Digit Number & show it in UI
document.getElementById("pin-btn").addEventListener("click", function () {
  const pin = getPin();
  document.getElementById("display-pin").value = pin;
});

//Keypad Display value
document.getElementById("key-pad").addEventListener("click", function (event) {
  const number = event.target.innerText;
  const displayNumber = document.getElementById("display-number");
  if (isNaN(number)) {
    if (number == "C") {
      displayNumber.value = "";
    }
  } else {
    const displayNumber = document.getElementById("display-number");
    const preDisplayNum = displayNumber.value;
    const newDisplayNum = preDisplayNum + number;
    displayNumber.value = newDisplayNum;
  }
});
// Show Error & Success Message in UI
document.getElementById("submit-btn").addEventListener("click", function () {
  const displayPin = document.getElementById("display-pin").value;
  const displayNumber = document.getElementById("display-number").value;
  const pinMatched = document.getElementById("notify-success");
  const pinWrong = document.getElementById("notify-fail");
  if (displayPin == displayNumber) {
    pinMatched.style.display = "block";
    pinWrong.style.display = "none";
  } else {
    pinWrong.style.display = "block";
    pinMatched.style.display = "none";
  }
});
