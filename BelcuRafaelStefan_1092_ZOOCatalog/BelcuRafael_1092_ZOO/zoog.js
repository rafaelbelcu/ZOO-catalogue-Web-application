document.getElementById("img").addEventListener("click", function () {
    document.getElementById("audio").play();
});
document.getElementById("img1").addEventListener("click", function () {
    document.getElementById("audio1").play();
});
document.getElementById("img2").addEventListener("click", function () {
    document.getElementById("audio2").play();
});

var canvas = document.getElementById("myCanvas2");
var ctx = canvas.getContext("2d");
ctx.font = "bold 17px Georgia";
ctx.fillStyle = "#046102";
ctx.textAlign = "center";
ctx.fillText("HEAR SOME OF THE ANIMALS", canvas.width / 2, canvas.height / 2);

var canvas = document.getElementById("myCanvas1");
var ctx = canvas.getContext("2d");
ctx.font = "bold 17px Georgia";
ctx.fillStyle = "#046102";
ctx.textAlign = "center";
ctx.fillText("LIVE FROM OUR ENCLOSURES", canvas.width / 2, canvas.height / 2);

var canvas = document.getElementById("myCanvas3");
var ctx = canvas.getContext("2d");
ctx.font = "bold 17px Georgia";
ctx.fillStyle = "#046102";
ctx.textAlign = "center";
ctx.fillText("MEET OUT NEWEST RESCUED FOX, GINGER", canvas.width / 2, canvas.height / 2);


const fill = document.querySelector('.fill');
const fillings = document.querySelectorAll('.filling');

fill.addEventListener('dragstart', dragStart);
fill.addEventListener('dragend', dragEnd);

for (const filling of fillings) {
    filling.addEventListener('dragover', dragOver);
    filling.addEventListener('dragenter', dragEnter);
    filling.addEventListener('dragleave', dragLeave);
    filling.addEventListener('drop', dragDrop);
}

function dragStart() {
    this.className += ' hold';
    setTimeout(() => (this.className = 'invisible'), 0);
}

function dragEnd() {
    this.className = 'fill';
}

function dragOver(e) {
    e.preventDefault();
}

function dragEnter(e) {
    e.preventDefault();
    this.className += ' hovered';
}

function dragLeave() {
    this.className = 'filling';
}

function dragDrop() {
    this.className = 'filling';
    this.append(fill);
}

if ('serviceWorker' in navigator) {

    navigator.serviceWorker.register('sw.js').then(registration => {
        console.log('SW Registered');
        console.log('registration');
    }).catch(error => {
        console.log("SW Registered Failed!");
    console.log('error');
});
}
