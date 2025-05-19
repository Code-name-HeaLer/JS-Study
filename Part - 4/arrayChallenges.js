/* 
1. Declare an array named `teaFlavors` that contains the strings `"green tea"`, `"black tea"`, and `"oolong tea"`. 
Access the first element of the array and store it in a variable named `firstTea`.
*/

let teaFlavors = ["green tea", "black tea", "oolong tea"];
let firstTea;

for (let i1 = 0; i1 < teaFlavors.length; i1++) {
  firstTea = teaFlavors[0];
}
console.log(`The first tea in the array is ${firstTea}`);

/* 
2. Declare an array named `cities` containing `"London"`, `"Tokyo"`, `"Paris"`, and `"New York"`. 
   Access the third element in the array and store it in a variable named `favoriteCity`.
*/

let cities = ["London", "Tokyo", "Paris", "New York"];
const favoriteCity = cities[2];
console.log(`My Favorite City is ${favoriteCity}`);

/* 
3. You have an array named `teaTypes` containing `"herbal tea"`, `"white tea"`, and `"masala chai"`. 
   Change the second element of the array to `"jasmine tea"`.
*/

let teaTypes = ["herbal tea", "white tea", "masala chai"];
console.log(`Original Array 1 = ${teaTypes}`);

teaTypes[1] = "jasmine tea";
console.log(`Modified Array 1 = ${teaTypes}`);

/* 
4. Declare an array named `citiesVisited` containing `"Mumbai"` and `"Sydney"`. 
Add `"Berlin"` to the array using the `push` method.
*/

let citiesVisited = ["Mumbai", "Sydney"];
console.log(`Original Array 2  = ${citiesVisited}`);
citiesVisited.push("Berlin");
console.log(`Modified Array 2 = ${citiesVisited}`);

/* 
5. You have an array named `teaOrders` with `"chai"`, `"iced tea"`, `"matcha"`, and `"earl grey"`. 
Remove the last element of the array using the `pop` method and store it in a variable named `lastOrder`.
*/

let teaOrders = ["chai", "iced tea", "matcha", "earl grey"];
console.log(`Original Array 3 = ${teaOrders}`);
const lastOrder = teaOrders.pop();
console.log(`Last order in the Array = ${lastOrder}`);

/* 
6. You have an array named `popularTeas` containing `"green tea"`, `"oolong tea"`, and `"chai"`. 
   Create a soft copy of this array named `softCopyTeas`.
*/

let popularTeas = ["green tea", "oolong tea", "chai"];
let softCopyTeas = popularTeas;
console.log(`The soft copy of original array = ${softCopyTeas}`);

/* 
7. You have an array named `topCities` containing `"Berlin"`, `"Singapore"`, and `"New York"`. 
   Create a hard copy of this array named `hardCopyCities`.
*/
let topCities = ["Berlin", "Singapore", "New York"];
const hardCopyCities = [...topCities];
console.log(`The hard copy of original array = ${hardCopyCities}`);

/* 
8. You have two arrays: `europeanCities` containing `"Paris"` and `"Rome"`, and `asianCities` containing `"Tokyo"` and `"Bangkok"`. 
   Merge these two arrays into a new array named `worldCities`.
*/

let europeanCities = ["Paris", "Rome"];
let asianCities = ["Tokyo", "Bangkok"];
const worldCities = europeanCities.concat(asianCities);
console.log(`Merged Array = ${worldCities}`);

/* 
9. You have an array named `teaMenu` containing `"masala chai"`, `"oolong tea"`, `"green tea"`, and `"earl grey"`. 
   Find the length of the array and store it in a variable named `menuLength`.
*/

let teaMenu = ["masala chai", "oolong tea", "green tea", "earl grey"];
const menuLength = teaMenu.length;
console.log(`The length of the menu is ${menuLength}`);

/* 
10. You have an array named `cityBucketList` containing `"Kyoto"`, `"London"`, `"Cape Town"`, and `"Vancouver"`. 
    Check if `"London"` is in the array and store the result in a variable named `isLondonInList`.
*/

// One way
let cityBucketList = ["Kyoto", "London", "Cape Town", "Vancouver"];
let isLondonInList1 = false;

for (let index = 0; index < cityBucketList.length; index++) {
  if (cityBucketList[index] === "London") {
    isLondonInList = true;
    break;
  }
}

if (isLondonInList) {
  console.log("London exists in the array");
} else {
  console.log("London doesn't exist in the array");
}

// Another way
let isLondonInList2 = cityBucketList.includes("London");
console.log(isLondonInList2); // true
