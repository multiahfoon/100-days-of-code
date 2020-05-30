// change background color of body and display current rgb color
const bodyColor = document.getElementById('bodyColor');
const colorBtn = document.getElementById('colorBtn');

// generate background color 
let color = [];
const colorGen = () => {
    color = [];
    for(var i = 1; i <= 3; i++){
        color.push(Math.floor(Math.random()*225));    
    }
    console.log(color);
}

// add listener to button
colorBtn.addEventListener('click', () => {
    colorGen();
})