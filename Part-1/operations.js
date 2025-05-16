// Operations in Javascript

let score_1 = 20;
let score_2 = 30;
let bonus = score_1 + score_2;
console.log(bonus);

let add = 2 + 3;
let sub = 3 - 2;
let mult = 2 * 5;
let div = 8 / 2;
let rem = 7 % 3;
let power = 2 ** 3;

console.log(
  `Addition: ${add}, Substraction: ${sub}, Multiplication: ${mult}, Division: ${div}, Remainder: ${rem}, To the power of: ${power}`
);

// Increment and decrement operator in JavaScript
let MyScore = 20;
MyScore++; // post fix increment operator (Returns the current value, then increments)

++MyScore; // pre fix incremnt operator (Increments first, then returns the new value)

MyScore--; // post fix decrement operator
--MyScore; // pre fix decrement operator

// Comparision Operations in JavsaScript
let num1 = 5;
let num2 = 6;
let num3 = 5;

console.log(num1 == num3); // Checks for equality between values
console.log(num1 != num2); // Checks for inequality between values
console.log(num1 === num3); // Checks for strict equality (value as well as type)
console.log(num2 > num3); // Checks for greater than
console.log(num1 < num2); // Checks for lesser than
console.log(num1 >= num3); // Checks for greater than equal to
console.log(num1 <= num3); // Checks for lesser than equal to
