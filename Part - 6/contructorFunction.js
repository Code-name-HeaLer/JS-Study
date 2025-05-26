// Constructor Function (Can't be used in arrow function)
function car(make, model) {
  this.make = make;
  this.model = model;
}

let newCar = new car("Tata", "Safari");
console.log(newCar);

let anotherCar = new car("Nissan", "Magnite");
console.log(anotherCar);

function Teas(type) {
  this.type = type;
  this.desc = function () {
    return `This is a ${this.type}`;
  };
}

let lemonTea = new Teas("Lemon Tea");
console.log(lemonTea.desc());

let greenTea = new Teas("Green Tea");
console.log(greenTea.desc());

// Prototypical Constructor
function Animals(Species) {
  this.Species = Species;
}

Animals.prototype.sound = function () {
  return `${this.Species} Makes a sound`;
};

let Dog = new Animals("Dog");
console.log(Dog.sound());

// Check if new keyword is used while using constructor
function Tea(types) {
  if (!new.target) {
    throw new Error("Please use new Keyword");
  }
  this.types = types;
}

let chai = new Tea("Chai");
console.log(chai);
let coffee = Tea("Coffee");
console.log(coffee);
