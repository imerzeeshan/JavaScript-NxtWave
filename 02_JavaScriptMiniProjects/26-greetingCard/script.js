let greeting = '{"greetText":"Wishing that the new year will bring joy, love, peace, and happiness to you.","from":"Md Zeeshan","to":"Moassar Rizwi"}';
let from = document.getElementById('from');
let to = document.getElementById('to');
let wishing = document.getElementById('wishing');

let parsedGreeting = JSON.parse(greeting);

from.textContent = "From: " + parsedGreeting.from;
to.textContent = "To: " + parsedGreeting.to;
wishing.innerHTML = parsedGreeting.greetText;