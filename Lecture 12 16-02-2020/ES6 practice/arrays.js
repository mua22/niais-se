let names = ["Zubair", "Saleem", "Ali"];
const printName = (n, index) => {
  console.log(index + ": " + n);
  return index;
};
printName("Hello", "Usman");
let mappedNames = names.map(printName);
console.log(names);
console.log(mappedNames);
