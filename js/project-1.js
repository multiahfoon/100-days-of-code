const colorBtn = document.getElementById('colorBtn');
const bodyColor = document.getElementById('bodyColor');

// color generater
let rgb = []
const colorNum = () => {
    for(var i = 1; i <= 3; i++){
        rgb.push(Math.floor(Math.random()*224));
    }
}

colorBtn.addEventListener('click', ()=>{
    rgb = [];
    colorNum();
    bodyColor.style.backgroundColor = `rgb(${rgb[0]}, ${rgb[1]}, ${rgb[2]})`;
    console.log(rgb);
})

