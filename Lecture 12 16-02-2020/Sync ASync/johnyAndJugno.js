function makeBurger(type, deliverBurger) {
  console.log("Starting Burger Cooking:" + type);
  setTimeout(() => {
    console.log("Burger Cooked");
    deliverBurger("Yummy: " + type);
  }, 1000);
}
console.clear();
console.log("Order Zinger");
makeBurger("BigZinger", eatingBurger);
function eatingBurger(burger) {
  console.log("Eaqting: " + burger);
}
console.log("Chatting With Friends");
