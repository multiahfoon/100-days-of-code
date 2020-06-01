// Objective: Take input then display it in dom
// access elements in dom
const messageInput = document.getElementById('messageInput');
const messageBtn = document.getElementById('messageBtn');
const messageDisplay = document.getElementById('messageDisplay');

let message = [];
messageBtn.addEventListener('click', ()=>{
    message.push(messageInput.value);
    console.log(message);
    messageDisplay.innerText = message;
    
    // clears input so value can reset
    messageInput.value = "";
    message = [];
});