// const sum = require("./calculator/sumFunc"); // single import
const { sum, subtract } = require("./calculator/index"); //multiple import
var x = 5;
var y = 9;
var z = sum(x, y);
console.log("Result: " + z);
