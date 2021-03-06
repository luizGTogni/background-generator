const cssElement = document.querySelector('h3');
const color1Element = document.querySelector('.color1');
const color2Element = document.querySelector('.color2');
const body = document.getElementById('gradient');

function setGradient() {
  body.style.background = 
    `linear-gradient(to right, ${color1Element.value}, ${color2Element.value}`;

  cssElement.textContent = body.style.background + ';';
}

color1Element.addEventListener('input', setGradient);

color2Element.addEventListener('input', setGradient);