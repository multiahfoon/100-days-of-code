const countDisplay = document.getElementById('countDisplay');
const lowerBtn = document.getElementById('lowerBtn');
const addBtn = document.getElementById('addBtn');

let currentNum = 0;

lowerBtn.addEventListener('click', () => {
    currentNum --;
    countDisplay.innerText = currentNum; 
});

addBtn.addEventListener('click', () => {
    currentNum ++;
    countDisplay.innerText = currentNum; 
});