// Problem soliving app
const equationDisplay = document.getElementById('equationDisplay');

// generate random numbers between 1 to 10
let answer = false;
let twoSums = [];

// generate two values for equation
for(let i = 0; i < 2; i++){
    let randomNum = Math.floor(Math.random()*11);
    twoSums.push(randomNum);
}
console.log(twoSums);
// display equations