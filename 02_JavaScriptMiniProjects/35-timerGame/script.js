let timerEl = document.getElementById("timer");
let defuserEl = document.getElementById("defuser");

let countdown = 10;

let intervalId = setInterval(() => {
    countdown--;
    timerEl.textContent = countdown;

    if(countdown === 0){
        timerEl.textContent = "BOOM !!";
        clearInterval(intervalId);
    }
},1000);

defuserEl.addEventListener("keydown",(event) => {
    let value = defuserEl.value;
    if (event.key === "Enter" && value === "defuse" && countdown !== 0) {
        timerEl.textContent = "You did it !!!";
        clearInterval(intervalId);
    }
});
