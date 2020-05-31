// create a quote generator
// have all quotes stored into an array or maybe an object or something
const genQuoteBtn = document.getElementById('genQuoteBtn');
const quoteDisplay = document.getElementById('quoteDisplay');
const author = document.getElementById('authors');

const quoteList = ["asdf", "asdflkj", "dfdaskljljk"];
genQuoteBtn.addEventListener('click', ()=>{
    quoteDisplay.innerText = quoteList[Math.floor(Math.random()*3)];
});