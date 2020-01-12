function sendAPICall() {
  console.log("Sending API call");
}
window.onload = doBindings;

function doBindings() {
  var btn = document.getElementById("mybtn");
  btn.onclick = sendAPICall;
}
