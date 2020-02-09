console.log("Hello");
function dance() {
  console.log("Dancing ...");
}
var baby = {
  name: "hareem",
  dance: dance,
  eat: function() {
    console.log("eating");
  }
};
console.log(baby.name);
baby.dance(); // will call the dance func
var babyDance = dance; //only reference is passing
console.log(typeof babyDance); // function will be printed
console.log(babyDance); //function code will be printed
babyDance(); //dance func will be called
baby.eat(); // eat func will be called. func is annonymous but its reference is in eat
