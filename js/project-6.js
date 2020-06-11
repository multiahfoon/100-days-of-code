// Problem soliving app
const equationDisplay = document.getElementById('equationDisplay');
const userGuess = document.getElementById('userGuess');
const checkBtn = document.getElementById('checkBtn');

let answer = false;
let twoSums = [];

const genEquation = () => {

    // loop to generate two values for equation
    for(let i = 0; i < 2; i++){
        // generate random numbers between 0 to 10 both non inclusive 
        let randomNum = Math.floor(Math.random()*9)+1;
        twoSums.push(randomNum);
        console.log(randomNum);
        console.log(twoSums);
    }

    // display equation
    let equation = `${twoSums[0]} + ${twoSums[1]} =`;
    equationDisplay.innerText = equation;
}
// used to start game
genEquation();

// calculate total but need refactoring
let total = eval(twoSums[0]+twoSums[1]);

// auto select input field so user can type
userGuess.focus();
console.log(total);

// check users guess
const checkGuess = () => {
    let guess = userGuess.value;
    console.log(guess);
    if(guess == total){
        console.log(total);
        userGuess.value = "";
        twoSums = [];
        genEquation();
        total = eval(twoSums[0]+twoSums[1]);
        console.log("you got it right");
        console.log(total);
    }else{
        // not working
        userGuess.value = "";
        userGuess.focus();
    }
}

checkBtn.addEventListener('click', () => {
    checkGuess();
});

userGuess.addEventListener("keydown", (key) => {
    if(key.keyCode === 13){
        checkGuess();
        console.log("enter");
    }
});