console.log("bindings.js file started");

function buttonClicked() {
  alert("Button is clicked");
}
/**
 * This func will do bindings
 */
function doBindings() {
  var btn = document.getElementById("myButton");
  btn.onclick = buttonClicked;
}
// do bindings after page load
window.onload = doBindings;
// doBindings();

console.log(buttonClicked);
console.log("bindings.js file finished");
