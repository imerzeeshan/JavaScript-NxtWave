let greetBtn = document.getElementById('GreetBtn');
let container = document.getElementById('container');

greetBtn.addEventListener("click", () => {
    let p = document.createElement('p');
    p.innerHTML = "button clicked";
    container.appendChild(p);
});

//---------------------------

let input = document.createElement('input');
document.body.appendChild(input);


// function keyEvent() {
//     let p = document.createElement('p');
//     p.innerHTML = "key Pressed";
//     document.body.appendChild(p);
// }

function keyEvent(event) {
    let p = document.createElement('p');
    console.log(event)
    console.log(event.type)
    console.log(event.target)
    console.log(event.key)

    // p.innerHTML = event.type;
    // document.body.appendChild(p);
    // p.innerHTML = event.target;
    // document.body.appendChild(p);

}

input.addEventListener('keydown',keyEvent);