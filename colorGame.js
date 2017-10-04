/*
    PLANNED UPDATES :
    - HEX MODE
    - SCORE SYSTEM + TRIES
    - LEADERBOARDS
*/

var colors = [];

var colorDisplay = document.querySelector("#colorDisplay");

var squares = document.querySelectorAll(".square");

var head = document.querySelector("#head");

var modes = document.querySelectorAll(".mode");
var buttons = document.querySelectorAll("button");

var newColor = document.querySelector(".newColor");

var message = document.querySelector(".message");

var numberOfSquares = 6;

var targetColor;

var scoreDisplay = document.querySelector(".score");
var triesDisplay = document.querySelector(".triesLeft");

var tries = Number(triesDisplay.textContent);
var score = Number(scoreDisplay.textContent);

init();

function init () {
    reset();
    setUpModes();
    setUpSquares();
    
    newColor.addEventListener("click", function() {
        reset();
    });
}

function reset() {
    colors = generateRandomColors();
    targetColor = correctColor();
    colorDisplay.textContent = targetColor;
    tries = 3;
    triesDisplay.textContent = tries;
    
    for (var i = 0; i < squares.length; i++) {
        if (colors[i]) {
            squares[i].style.background = colors[i];
            squares[i].style.display = "block";
        } else {
            squares[i].style.display = "none";
        }
    }
}

function setUpSquares() {
    for (var i = 0; i < squares.length; i++) {
        squares[i].addEventListener("click", function () {

            var clickedSquare = this.style.backgroundColor;

            if (tries !== 0) {
                if (clickedSquare === targetColor) {

                    for (var i = 0; i < colors.length; i++) {
                        squares[i].style.background = clickedSquare;
                    }

                    head.style.background = clickedSquare;
                    message.textContent = "Correct!";
                    score += 10;
                    scoreDisplay.textContent = score;
                    console.log(targetColor);
                    console.log(clickedSquare);
                    reset();
                } else {
                    this.style.background = "#232323";
                    message.textContent = "Wrong!";
                    tries--;
                    triesDisplay.textContent = tries
                    console.log(targetColor);
                    console.log(clickedSquare);
                }
            } else {
                message.textContent = "GAME OVER!";
            }
        });
    } 
}

function setUpModes() {
    for (var i = 0; i < modes.length; i++) {
        modes[i].addEventListener("click", function() {
            modes[0].classList.remove("selected");
            modes[1].classList.remove("selected");

            this.classList.add("selected");

            if (this.textContent === "Hard") {
                numberOfSquares = 6;
                reset();
            } else {
                numberOfSquares = 3;
                reset();
            }
        });
        
    }
}

function randomColor() {
    var r = Math.floor(Math.random() * 256);
    var g = Math.floor(Math.random() * 256);
    var b = Math.floor(Math.random() * 256);

    return "rgb(" + r + ", " + g + ", " + b + ")";
}

function generateRandomColors() {
    var arr = [];

    for (var i = 0; i < numberOfSquares; i++) {
        arr.push(randomColor());
    }

    return arr;
}

function correctColor() {
    var random = Math.floor(Math.random() * colors.length);

    return colors[random];
}