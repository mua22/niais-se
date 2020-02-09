function dontDoIt() {
  alert("You disturbed me");
}

window.onload = function() {
  document.getElementById("btn1").onclick = dontDoIt;
};

$(function() {
  $("#btn2").click(dontDoIt);
});
