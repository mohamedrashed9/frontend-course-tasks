function showDate() {
  document.getElementById("date").innerHTML = Date();
}

function turnOn() {
  document.getElementById("bulb").src = "media/pic_bulbon.gif";
}

function turnOff() {
  document.getElementById("bulb").src = "media/pic_bulboff.gif";
}
