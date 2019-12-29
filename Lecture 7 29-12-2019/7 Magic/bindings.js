window.onload = function() {
  var btn = document.getElementById("myButton");
  btn.onclick = danceME;
  setInterval(function() {
    console.log("Timer Called");
    btn.click();
  }, 500);
};

function danceME() {
  console.log("Dance Me Clicked");
  var example = document.getElementById("example");
  if (example.classList.contains("left")) {
    example.classList.remove("left");
    example.classList.add("right");
  } else {
    example.classList.remove("right");
    example.classList.add("left");
  }
}
