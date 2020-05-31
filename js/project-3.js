// create a quote generator
// have all quotes stored into an array or maybe an object or something
const genQuoteBtn = document.getElementById('genQuoteBtn');
const quoteDisplay = document.getElementById('quoteDisplay');
const author = document.getElementById('author');


// access the index first then select the data key inside
const quoteList = [
    {
        quote: '“Any fool can write code that a computer can understand. Good programmers write code that humans can understand.”',
        author: "Martin Fowler"
    }, {
        quote: '“First, solve the problem. Then, write the code.”',
        author: "John Johnson"
    }, {
        quote: '"Experience is the name everyone gives to their mistakes.”',
        author: "Oscar Wilde"
    }, {
        quote: '“In order to be irreplaceable, one must always be different.”',
        author: "Coco Chanel"
    }, {
        quote: '“Sometimes it pays to stay in bed on Monday, rather than spending the rest of the week debugging Monday’s code.”',
        author: "Dan Salomon"
    }
];


genQuoteBtn.addEventListener('click', () => {
    let randomNum = Math.floor(Math.random() * quoteList.length);
    quoteDisplay.innerText = `${quoteList[randomNum].quote}`;
    author.innerText = `${quoteList[randomNum].author}`;
});

