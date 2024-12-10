let span = document.getElementById('counterValue');
let incrementBtn = document.getElementById('incrementBtn');

localStorage.clear();

let clickCount = localStorage.getItem("clickCount");
if (clickCount === null) {
    span.innerHTML = 0;
} else {
    span.innerHTML = clickCount;
}
// console.log(parseInt(count));
incrementBtn.onclick = function() {
    let prev = parseInt(span.textContent) + 1;
    // let updated = prev + 1;
    localStorage.setItem("clickCount", prev);
    span.textContent = prev;
};