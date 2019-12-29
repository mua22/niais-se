var car1 = "audi";
var car2 = "alto";
var car3 = "civic";
console.log(car2);
//how to declare an array
var car = ["suzuki", "honda", "swift", "kids", "sports"];
console.log("Car Length: " + car.length);

//For Loop Demo
var i = 0; // for loop index; controlling var
for (; i < 6; ) {
  console.log("hello i= " + i);
  i = i + 1; // change controlling variable
}

//simplifid for

for (var x = 0; x < car.length; x++) {
  console.log("x = " + x);
  console.log(car[x]);
}
