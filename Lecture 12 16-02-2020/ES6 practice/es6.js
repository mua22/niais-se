// this will not be executed at browser
// difference between const, let and var
console.clear();
let name = "Usman Akram";
if (true) {
  let name = "Muhammad Usman Akram";
}
let oldWay = "Hello " + name + " You are a teacher";
let newWay = `Hello ${name} You are a teacher`;
console.log(newWay);
