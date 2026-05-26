let canvas = document.querySelector('.canvas');
let numberOfSquares = 256;

let canvasBtn = document.querySelector('.canvas-btn');
let resetBtn = document.querySelector('.reset-btn');

let targetTotal = 735;
let newCanvas;

function generateCanvas() {
    for (let i = 1; i <= numberOfSquares; i++) {
        let square = document.createElement('div');
        square.classList.add('square');
        canvas.appendChild(square);
    }
}
generateCanvas();

// creates the sketching capability
canvas.addEventListener('mouseover', (event) => {
    let target = event.target;
    target.style.backgroundColor = "#232831";
});

function getValues(newCanvas) {
    let gap = 5 * (newCanvas - 1);
    let padding = 20; 
    
    let remainingTarget = targetTotal - padding - gap;
    let squareSize = remainingTarget / newCanvas;
    
    return { squareSize, gap };
}

function generateNewCanvas(newCanvas) {
    let values = getValues(newCanvas);
    let squareSize = values.squareSize;

    numberOfSquares = newCanvas * newCanvas;
    canvas.replaceChildren();
    for (let i = 1; i <= numberOfSquares; i++) {
        let square = document.createElement('div');
        square.style.cssText = `
            height: ${squareSize}px;
            width: ${squareSize}px;
            background-color: #eceff4;
        `;
        canvas.appendChild(square);
    }
    canvas.style.gap = `${values.gap}`;
}

canvasBtn.addEventListener('click', (event) => {
    do {
        newCanvas = parseInt(prompt("Enter new canvas size less than 100"));
        if (newCanvas === NaN) break;
    }
    while (newCanvas > 50 || newCanvas < 1)
    
    if (newCanvas <= 50) {
        generateNewCanvas(newCanvas);
    }
});

resetBtn.addEventListener('click', (event) => {
    for (let child of canvas.children) {
        child.style.backgroundColor = "#eceff4";
    }
});