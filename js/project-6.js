// Problem soliving app
const equationDisplay = document.getElementById('equationDisplay');
const userGuess = document.getElementById('userGuess');
const checkBtn = document.getElementById('checkBtn');

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
const checkGuess = () => {
    let guess = userGuess.value;
    console.log(guess);
    if(guess == total){
        console.log("you got it right");
    }else{
        // not working
        userGuess.value = "";
        userGuess.focus();
    }
}
checkBtn.addEventListener('click', () => {
    checkGuess();
});

userGuess.addEventListener("keydown", (e) => {
    if(e.keyCode === 13){
        checkGuess();
        console.log("enter");
    }
});