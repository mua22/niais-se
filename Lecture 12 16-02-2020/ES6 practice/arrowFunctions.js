console.clear();
function printMessage(message) {
  console.log(message);
}
//same cab be written as
const printArrow = (name, message) => {
  console.log(name + ": " + message);
};
printMessage("We are starting JS Session");
printArrow("Usman", "We are starting JS Session");

function square(x) {
  return x * x;
}

let squarex = x => x * x;

console.log(squarex(6));
