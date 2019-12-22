function h1Clicked() {
  console.log("h1 clicked");
  var paragraph = document.getElementById("para");
  paragraph.innerText = "Slapped";
  paragraph.classList.add("redBorder");
}
