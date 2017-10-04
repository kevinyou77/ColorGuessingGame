var body = document.querySelector("body");
var newGame = document.querySelector("#newGame");
var about = document.querySelector("#about");
var h1 = document.querySelector("h1");

setInterval(function() {
    bodyColorChange();
},2000);

newGame.addEventListener("mouseover", function() {
    h1.textContent = "YOU ARE READY!";
});

newGame.addEventListener("mouseout", function() {
    h1.textContent = "The Great Color Game!";
});

about.addEventListener("mouseover", function() {
    h1.textContent = "See Who Makes this Awesome Game!";
});

about.addEventListener("mouseout", function() {
    h1.textContent = "The Great Color Game!";
});


function bodyColorChange() {
    body.style.background = randomColor();
}

function randomColor() {
    var r = Math.floor(Math.random() * 100);
    var g = Math.floor(Math.random() * 100);
    var b = Math.floor(Math.random() * 100);

    return "rgb(" + r + ", " + g + ", " + b + ")";
    
}