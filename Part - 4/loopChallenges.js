/* 
1. Write a `while` loop that calculates the sum of all numbers from 1 to 5 and stores the result in a variable named `sum`.
*/

let i1 = 1,
  sum = 0;
while (i1 <= 5) {
  sum = sum + i1;
  i1++;
}
console.log(`Q1 - ${sum}`);

/* 
2. Write a `while` loop that counts down from 5 to 1 and stores the numbers in an array named `countdown`.
*/

let count = 5;
let countdown = [];
while (count >= 1) {
  countdown.push(count);
  count--;
}
console.log(`Q2 - ${countdown}`);

/* 
3. Write a `do while` loop that prompts a user to enter their favorite tea type until they enter `"stop"`. 
   Store each tea type in an array named `teaCollection`.
*/

// let teaCollection = [];
// let tea;
// do {
//   tea = prompt(`Enter your favourite tea (type "stop" to finish)`);

//   if (tea !== "stop") {
//     teaCollection.push(tea);
//   }
// } while (tea !== "stop");

/* 
4. Write a `do while` loop that adds numbers from 1 to 3 and stores the result in a variable named `total`.
*/

let i2 = 1,
  total = 0;
do {
  total = total + i2;
  i2++;
} while (i2 <= 3);
console.log(`Q4 - ${total}`);

/* 
5. Write a `for` loop that multiplies each element in the array `[2, 4, 6]` by 2 and stores the results in a new array named `multipliedNumbers`.
*/

let arr1 = [2, 4, 6];
let multipliedNumbers = [];
for (let j = 0; j < arr1.length; j++) {
  multipliedNumbers.push(arr1[j] * 2);
}
console.log(`Q5 - ${multipliedNumbers}`);

/* 
6. Write a `for` loop that lists all the cities in the array `["Paris", "New York", "Tokyo", "London"]` and stores each city in a new array named `cityList`.
*/

let cities = ["Paris", "New York", "Tokyo", "London"];
let cityList = [];
for (let k = 0; k < cities.length; k++) {
  cityList.push(cities[k]);
}
console.log(`Q6 - ${cityList}`);
