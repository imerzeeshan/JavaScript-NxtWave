let h1Element = document.createElement('h1');
h1Element.textContent = "Web Technologies";

let btnElement = document.createElement('button');
btnElement.textContent = 'Change Heading';

let prevBtn = document.createElement('button');
prevBtn.textContent = 'Remove Style';

let containerElement = document.getElementById('myContainer');
containerElement.appendChild(h1Element);
containerElement.appendChild(btnElement);
containerElement.appendChild(prevBtn);

btnElement.onclick = () => {
    h1Element.textContent = '4.0 Technologies';
    // h1Element.style.color = 'blue';
    // h1Element.style.fontSize = '40px';
    // h1Element.style.fontFamily = 'caveat';
    // h1Element.style.textDecoration = 'underline';
    h1Element.classList.add('heading');
}

prevBtn.onclick = () => {
    h1Element.classList.remove('heading');
}








