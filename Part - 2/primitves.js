// Number

let balance = 120;
let anotherBalance = new Number(120);

// console.log(balance);
// console.log(anotherBalance.valueOf());

// console.log(typeof balance);
// console.log(typeof anotherBalance);

//boolean
let isActive = true;
let isReallyActive = new Boolean(true); // not recommended

// null and undefined

let firstname = null;
let lastname = undefined;
// console.log(firstname);
// console.log(lastname);

//string

let myString = "hello";
let myStringOne = "Hola";
let username = "Swagat";

let oldGreet = myString + " " + "Swagat";
// console.log(oldGreet);

let greetMessage = `Hello ${username} !`;
let demoOne = `Value is ${2 * 2}`;
// console.log(demoOne);

let sm1 = Symbol("Swagat");
let sm2 = Symbol("Swagat");

console.log(sm1);

console.log(typeof sm1);
console.log(sm1 === sm2);
