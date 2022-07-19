var canvas, ctx;
var width, height;
var x, y;
var incX = 9;
var size = 30;

function init() {
    canvas = document.querySelector("#myCanvas");
    ctx = canvas.getContext("2d");
    width = canvas.width;
    height = canvas.height;
    x = 30; y = 30;
    ctx.fillStyle = "green";
    animationLoop();
}

function changeSize(event) {
    size = parseInt(event.target.value);
    document.getElementById("size").innerHTML = size;
}


function animationLoop() {
    ctx.clearRect(0, 0, width, height);
    ctx.fillRect(x, y, size, size);
    ctx.strokeRect(x, y, size, size);
    x += incX;
    if ((x + size) > width || (x <= 0)) {
        x -= incX;
        incX = -incX;
    }
    requestAnimationFrame(animationLoop);
}

function changeColor(event) {
    ctx.fillStyle = event.target.value;
}
