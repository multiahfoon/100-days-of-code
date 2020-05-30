// change background color of body and display current rgb color
// generate background color 
const bodyColor = document.getElementById('bodyColor');
const colorBtn = document.getElementById('colorBtn');

let color = [];
const colorGen = () => {
    for(var i = 1; i <= 3; i++){
        Math.floor(Math.random()*225);    
    }
}