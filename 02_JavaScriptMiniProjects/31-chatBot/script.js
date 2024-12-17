let chatbotMsgList = ["Hi", "Hey", "Good Morning", "Good Evening", "How can I help you?", "Thank You"];

let chatContainer = document.getElementById('chatContainer');
let userInput = document.getElementById('userInput');
let sendMsgBtn = document.getElementById('sendMsgBtn');

// let index = Math.floor(Math.random() * chatbotMsgList.length);
// console.log(index);

sendMsgBtn.onclick = function() {
    let div = document.createElement('div');
    div.classList.add("msg-to-chatbot-container");
    chatContainer.appendChild(div);

    let span1 = document.createElement('span');
    span1.classList.add("msg-to-chatbot");
    span1.innerHTML = userInput.value;
    div.appendChild(span1);

    userInput.value = "";
    chatbotReply();
};

function chatbotReply() {
    let index = Math.floor(Math.random() * chatbotMsgList.length);

    let div = document.createElement('div');
    div.classList.add("msg-from-chatbot-container");
    chatContainer.appendChild(div);

    let span1 = document.createElement('span');
    span1.classList.add("msg-from-chatbot");
    span1.innerHTML = chatbotMsgList[index];
    div.appendChild(span1);
}