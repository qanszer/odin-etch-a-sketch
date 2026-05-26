let canvas = document.querySelector('.canvas');

let numberOfSquares = 256;

for (let i = 1; i <= numberOfSquares; i++) {
    console.log("a");
    let square = document.createElement('div');
    square.classList.add('square');
    canvas.appendChild(square);
}

canvas.addEventListener('mouseover', (event) => {
    let target = event.target;
    console.log(target);
    target.style.backgroundColor = "#232831";
});