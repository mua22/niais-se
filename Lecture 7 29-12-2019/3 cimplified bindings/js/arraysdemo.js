var cars = ["suzuki", "honda", "swift", "kids", "sports"];

function loadCars() {
  console.log("Load Cars Called");
  var carsUl = document.getElementById("carsUL");
  carsUl.innerHTML = "";
  for (var index = 0; index < cars.length; index++) {
    carsUl.innerHTML += "<li>" + cars[index] + "</li>";
  }
  console.log(carsUl);
}
// sort cars and load lis
function sortCars() {
  cars.sort();
  loadCars();
}
