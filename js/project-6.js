// Problem soliving app
const equationDisplay = document.getElementById('equationDisplay');
const userGuess = document.getElementById('userGuess');
const check = document.getElementById('check');

let answer = false;
let twoSums = [];

// loop to generate two values for equation
for(let i = 0; i < 2; i++){
    // generate random numbers between 0 to 10 both non inclusive 
    let randomNum = Math.floor(Math.random()*9)+1;
    twoSums.push(randomNum);
    console.log(randomNum);
    console.log(twoSums);
}

// calculate total
let total = eval(twoSums[0]+twoSums[1]);

// display equation
let equation = `${twoSums[0]} + ${twoSums[1]} =`;
equationDisplay.innerText = equation;

// auto select input field so user can type
userGuess.focus();
console.log(total);
// check users guess
check.addEventListener('click', () => {
    let guess = userGuess.value;
    console.log(guess);
    if(guess == total){
        console.log("you got it right");
    }else{
        // not working
        userGuess.innerText = "";
    }
});