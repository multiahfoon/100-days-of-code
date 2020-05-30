// change background color of body then display current rgb color
const bodyColor = document.getElementById('bodyColor');
const colorBtn = document.getElementById('colorBtn');
const colorDisplayText = document.getElementById('colorDisplayText');

let color = [];
const colorGen = () => {
    color = [];
    for(var i = 1; i <= 3; i++){
        color.push(Math.floor(Math.random()*225));    
    }
    console.log(color);
}

colorBtn.addEventListener('click', () => {
    colorGen();
    bodyColor.style.backgroundColor = `rgb(${color[0]}, ${color[1]}, ${color[2]})`;
    colorDisplayText.innerHTML =  `Current color: rgb(${color[0]}, ${color[1]}, ${color[2]})`;
})
