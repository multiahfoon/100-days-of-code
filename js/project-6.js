// Problem soliving app
const equationDisplay = document.getElementById('equationDisplay');

// generate random numbers between 1 to 10
let answer = false;
let twoSums = [];

// generate two values for equation
for(let i = 0; i < 2; i++){
    let randomNum = Math.floor(Math.random()*9)+1;
    twoSums.push(randomNum);
}

// calculate total
let total = eval(twoSums[0]+twoSums[1]);


// display equation
let equation = `${twoSums[0]} + ${twoSums[1]} = ?`;
equationDisplay.innerText = equation;




// display equations