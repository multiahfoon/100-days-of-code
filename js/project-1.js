const colorBtn = document.getElementById('colorBtn');
const bodyColor = document.getElementById('bodyColor');

// color generater
const rgb = []
const colorNum = () => {
    for(var i = 1; i <= 3; i++){
        rgb.push(Math.floor(Math.random()*224));
    }
}

colorBtn.addEventListener('click', ()=>{
    colorNum();
    console.log(rgb);
    bodyColor.style.backgroundColor = "black";
})

