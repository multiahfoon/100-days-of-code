const countDisplay = document.getElementById('countDisplay');
const lowerBtn = document.getElementById('lowerBtn');
const addBtn = document.getElementById('addBtn');

let currentNum = 0;
countDisplay.innerText = currentNum; 

lowerBtn.addEventListener('click', () => {
    console.log("click");
    currentNum --;
    console.log(currentNum);
    countDisplay.innerText = currentNum; 
    return currentNum;});

addBtn.addEventListener('click', () => {
    console.log("click");
    currentNum ++;
    console.log(currentNum);
    countDisplay.innerText = currentNum; 
    return currentNum;
});