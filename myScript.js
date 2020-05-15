var barsHolder = document.getElementsByClassName("holder");
var bars = document.querySelectorAll(".bars");

function start() {
  for (var x = 0; x < bars.length; x++) {
    var height = Math.floor(Math.random() * 10) * 7 + 10;
    bars[x].style.height = height + "px";
  }
}

function changeB() {
  barsHolder[0].classList.add("bottom-lined");
}
function changeC() {
  barsHolder[0].classList.remove("bottom-lined");
}
setInterval(start, 200);
