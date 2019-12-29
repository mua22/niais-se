function buttonClicked() {
  alert("Button is clicked");
}

window.onload = function() {
  // do bindings after page load
  var btn = document.getElementById("myButton");
  btn.onclick = buttonClicked;
  var btn1 = document.getElementById("secButton");
  btn1.onclick = buttonClicked;
};
