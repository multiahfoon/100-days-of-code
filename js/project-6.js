// Problem soliving app
const equationDisplay = document.getElementById('equationDisplay');

// generate random numbers between 1 to 10
let randomNum = Math.floor(Math.random()*11);
let answer = false;
let twoSums = [];

// generate two values for equation
for(let i = 0; i <= 1; i++){
 twoSums.push(randomNum);
}

// display equations