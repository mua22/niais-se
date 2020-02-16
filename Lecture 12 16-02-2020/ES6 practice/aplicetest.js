let cars = ["Sidan", "Hybrid", "Audi", "Ferrari", "Honda"];
console.clear();
cars.splice(1, 0, "Alto");
console.log(cars);
cars.splice(
  cars.findIndex(n => n == "Audi"),
  1
);
console.log(cars);
