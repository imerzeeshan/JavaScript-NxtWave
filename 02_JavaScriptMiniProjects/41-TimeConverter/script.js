let hoursInput = document.getElementById('hoursInput');
let minutesInput = document.getElementById('minutesInput');
let convertBtn = document.getElementById('convertBtn');
let errorMsg = document.getElementById('errorMsg');
let timeInSeconds = document.getElementById('timeInSeconds');

convertBtn.addEventListener('click', () => {
    let hours = hoursInput.value;
    let minutes = minutesInput.value;

    console.log(hours, minutes);

    if (hours === "") {
        errorMsg.textContent = "Please enter a valid Number of hours";
        timeInSeconds.textContent = "";
        timeInSeconds.classList.remove("convertedSecond");
        return;
    } else if (minutes === "") {
        errorMsg.textContent = "Please enter a valid Number of minutes";
        timeInSeconds.textContent = "";
        timeInSeconds.classList.remove("convertedSecond");
        return;
    } else {
        errorMsg.textContent = "";
        let totalSeconds = parseInt(hours) * 3600 + parseInt(minutes) * 60;
        timeInSeconds.textContent = totalSeconds + "s";
        timeInSeconds.classList.add("convertedSecond");
    }

});