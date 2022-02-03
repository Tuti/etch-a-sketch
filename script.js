
const container = document.querySelector('#container');
const sketch = document.querySelector('#sketch');

container.style.cssText = 'display: flex; flex-direction: column; align-items: center; justify-content: center; margin: 24px;'
sketch.style.cssText = 'display: grid; width: 600px; height: 600px; grid-template-columns: repeat(16, auto); gap: 0; background-color: grey; border: solid;';

let title = document.createElement('div');
let text = document.createTextNode('Etch-a-sketch');
title.style.cssText = 'font-family: "Open Sans", serif; font-size: 24px; color: white;'
title.appendChild(text);
container.insertBefore(title, sketch);

let reset = document.createElement('button');
reset.textContent = 'Reset';
reset.id = 'resetBtn';
reset.style.cssText = 'margin: 8px; padding: 8px;'
container.appendChild(reset);

let resetButton = document.getElementById('resetBtn');
resetButton.addEventListener('click', event => {
    for(i = 0; i < 256; i++) {
        let square = document.getElementById(i);
        square.style.backgroundColor = 'white';
    }
})

for(let i = 0; i < 256; i++) {
    let square = document.createElement('div');
    square.id = i;
    square.classList.add('square');
    square.style.cssText = 'border: solid; border-width: 1px; border-color: black; width: auto; height: auto; margin: 0; padding: auto; background-color: white;';
    sketch.appendChild(square);
}


for(i = 0; i < 256; i++)
{
    let etch = document.getElementById(i);
    etch.addEventListener('mouseenter', function(e) {
        e.target.style.backgroundColor = 'green';
    });
    
}
