let bgColorsArray = ["#e75d7c", "#b16cef", "#53cca4", "#efc84d", "#628ef0", "#184b73", "#883e7f", "#ed048b"];
let bgColorContainer = document.getElementById('bgContainer');

let colorLength = bgColorsArray.length;
bgColorContainer.style.backgroundColor = bgColorsArray[0];

function bgColorsChanger() {
    let randomIndex = Math.ceil(Math.random() * colorLength);

    if (randomIndex === colorLength) {
        randomIndex = colorLength - 1;
    }
    // console.log(bgColorsArray[randomIndex]);
    bgColorContainer.style.backgroundColor = bgColorsArray[randomIndex];
}