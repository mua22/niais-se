let cars = ["Sidan", "Hybrid", "Audi"];
let newCars = ["Ferrari", "Honda"];
let allCars = cars.concat(newCars);
let allCars1 = [...cars, ...newCars];
console.clear();

let carsWithH = allCars1.filter(c => c.startsWith("H"));
console.log(carsWithH);
console.log(allCars1.findIndex(n => n == "Honda1"));
console.log(allCars1);
