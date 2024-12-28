let bgContainer = document.getElementById('bgContainer');
let themeUserInput = document.getElementById('themeUserInput');
let heading = document.getElementById('heading');

themeUserInput.addEventListener('keydown', (event) => {
    if (event.key === 'Enter' && themeUserInput.value === "Dark") {
        bgContainer.style.background = "url('https://d1tgh8fmlzexmh.cloudfront.net/ccbp-dynamic-webapps/change-theme-dark-bg.png')";
        heading.style.color = "#014d40";
    } else if (event.key === 'Enter' && themeUserInput.value === "Light") {
        bgContainer.style.background = "url('https://d1tgh8fmlzexmh.cloudfront.net/ccbp-dynamic-webapps/change-theme-light-bg.png')";
        heading.style.color = "#ffffff";
    } else if (event.key === 'Enter' && (themeUserInput.value !== "Dark" || themeUserInput.value !== "Light")) {
        alert('enter the valid theme');
    }
});