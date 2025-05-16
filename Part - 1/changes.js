// there are 2 types of assignment to variables, one can be changed anytime and one which is always fixed

let score = 100;
score = 102;
console.log(score); // Value can be modified here because the variable has been assigned using let keyword.

const userName = "Healer-Senpai";
userName = "Healer";
console.log(userName); // Value can't be modified here because the variable has been assigned using const keyword (constant value).
