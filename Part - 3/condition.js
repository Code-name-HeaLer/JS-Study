// Checking if a number is greater than another number:

let a = 10;
let b = 20;

if (b > a) {
  console.log(`${b} is greater than ${a}`);
} else {
  console.log(`${a} is greater than ${b}`);
}

// Checking if a string is equal to another string:

let str1 = "swagat";
let str2 = "SWAGAT";

if (str1 == str2) {
  console.log(`${str1} is equal to the type of ${str2}`);
} else if (str1 === str2) {
  console.log(`${str1} is equal to the type and value of ${str2}`);
} else {
  console.log(`The strings are not equal`);
}

//Checking if a variable is a number or not:

let var1 = 10;
let var2 = "10";

if (typeof var1 == "number") {
  console.log(`${var1} is a Number`);
} else if (typeof var2 == "number") {
  console.log(`${var2} is a Number`);
}

//Checking if a boolean value is true or false:

let isLoggedin = true;
if (isLoggedin) {
  console.log(`The User is Logged in!`);
} else {
  console.log(`The User is not Logged in!`);
}

// Checking if an array is empty or not:

// one way
let ary1 = [];
if (ary1 == "") {
  console.log(`The Array is empty`);
} else {
  console.log(`The Array is not empty`);
}

// another way
let ary2 = ["Swagat", "SWAGAT"];
if (ary2.length == 0) {
  console.log(`The Array is empty`);
} else {
  console.log(`The Array is not empty`);
}
