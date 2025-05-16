/* 
There are many data types in JS, these are the main ones:
String: Set of characters or letters
Number: whole number or decimal number
Boolean: True or False
BigInt: for storing bigger numbers during scientific calculation

Undefined: A variable that has been declared but not assigned a value is automatically assigned the value undefined.
Null: null is an intentional absence of any value. It is explicitly assigned by the programmer.

Object: Object is a non-primitive data type used to store key-value pairs. It can hold multiple values and types, including arrays, functions, and other objects.
Symbol: A Symbol is a primitive data type introduced in ES6. It represents a unique and immutable identifier.

*/

var score_1 = 100; // Old way of defining a variable, but not used because of scope issues.

let score_2 = 101; // New way of defining a variable, it can be accessed anywhere in the codebase without the problem of scopes.

// Examples:

let num = 123; // Number data type
let name = "Swagat"; // String data type
let isLoggedin = true; // Boolean data type

let score_3; // Undefined data type
let score_4 = null; // Null data type

let names = ["person-1", "person-2", "person-3"]; // Array data type
const obj = {
  name: "Swagat",
  age: 22,
  isDeveloper: true,
}; // Object data type

const sym = Symbol("id"); // Symbol data type
