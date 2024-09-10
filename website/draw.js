const canvas = document.getElementById('drawingCanvas');
const ctx = canvas.getContext('2d');

// Set canvas size
canvas.width = window.innerWidth - 40;
canvas.height = window.innerHeight - 100;

// Variables to keep track of drawing state
let isDrawing = false;
let x = 0;
let y = 0;

function startDrawing(e) {
    isDrawing = true;
    [x, y] = [e.offsetX, e.offsetY];
}

function stopDrawing() {
    isDrawing = false;
    ctx.beginPath(); // Reset the path to start a new line
}

function draw(e) {
    if (!isDrawing) return;

    ctx.lineWidth = 5;
    ctx.lineCap = 'round';
    ctx.strokeStyle = '#000';

    ctx.lineTo(e.offsetX, e.offsetY);
    ctx.stroke();
    ctx.beginPath();
    ctx.moveTo(e.offsetX, e.offsetY);
}

canvas.addEventListener('mousedown', startDrawing);
canvas.addEventListener('mouseup', stopDrawing);
canvas.addEventListener('mouseout', stopDrawing);
canvas.addEventListener('mousemove', draw);
