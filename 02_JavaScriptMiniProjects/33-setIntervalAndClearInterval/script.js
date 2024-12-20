let setIntervalBtn = document.getElementById('setIntervalBtn');
let clearIntervalBtn = document.getElementById('clearIntervalBtn');
let intervalCountContainer = document.getElementById('intervalCount');

let uniqueId = null;
setIntervalBtn.onclick = function() {
    let counter = 0;
    uniqueId = setInterval(function() {
        let span = document.createElement('span');
        span.innerHTML = counter+", ";
        
        intervalCountContainer.appendChild(span);
        console.log(counter);
        counter++;
    },1000);
    console.log(uniqueId);
};

clearIntervalBtn.onclick = function() {
    clearInterval(uniqueId);
    let p = document.createElement('p');
    p.innerHTML = "Interval Cleared";
    p.classList.add("text-center","mt-3");
    intervalCountContainer.appendChild(p);
    console.log("Interval Cleared");
};