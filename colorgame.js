var numSquares = 6;
var colors = [];
var pickedColor;
var squares = document.querySelectorAll(".square");
var colorDisplay = document.getElementById("colorDisplay");
var messageDisplay = document.querySelector("#message")
var h1 = document.querySelector("h1");
var resetButton = document.querySelector("#reset");
var modeButtons = document.querySelectorAll(".mode");

init();

function init(){
    // mode buttons
    for (var i = 0; i< modeButtons.length; i++){
        modeButtons[i].addEventListener("click", function(){
            modeButtons[0].classList.remove("selected");
            modeButtons[1].classList.remove("selected");
            this.classList.add("selected");
            this.textContent === "Easy" ? numSquares = 3: numSquares = 6;
            reset();
        });
    }
    for(var i = 0; i < squares.length; i++){
        //add click listeners
        squares[i].addEventListener("click", function(){
            //grab color of square
            var clickedColor = this.style.backgroundColor;
            //compare with main square
            if(clickedColor === pickedColor){
                messageDisplay.textContent = "Correct!";
                resetButton.textContent = "Play Again?";
                changeColors(clickedColor);
                h1.style.backgroundColor = clickedColor;
            } else {
                this.style.backgroundColor = "#232323";
                messageDisplay.textContent = "Try Again";
            }
        });
    }
    reset();
}



function reset(){
    colors = generateRandomColors(numSquares);
    //pick new main colour
    pickedColor = pickColor();
    //change colours of squares
    //change display text
    colorDisplay.textContent = pickedColor;
    resetButton.textContent = "New Colours"
    messageDisplay.textContent = "";
    for(var i = 0; i < squares.length; i++){
        if(colors[i]){
            squares[i].style.display = "block";
            squares[i].style.background = colors[i];
        } else {
            squares[i].style.display = "none";
        }
    }
    h1.style.background = "steelblue";    
}

// easyBtn.addEventListener("click", function(){
//     easyBtn.classList.add("selected");
//     hardBtn.classList.remove("selected");
//     numSquares = 3;
//     colors = generateRandomColors(numSquares);
//     pickedColor = pickColor();
//     colorDisplay.textContent = pickedColor;
//     for(var i = 0; i < squares.length; i++){
//         if(colors[i]){
//             squares[i].style.backgroundColor = colors[i];
//         } else {
//             squares[i].style.display = "none";
//         }
//     }
// })

// hardBtn.addEventListener("click", function(){
//     hardBtn.classList.add("selected");
//     easyBtn.classList.remove("selected");
//     numSquares = 6;
//     colors = generateRandomColors(numSquares);
//     pickedColor = pickColor();
//     colorDisplay.textContent = pickedColor;
//     for(var i = 0; i < squares.length; i++){
//             squares[i].style.backgroundColor = colors[i];
//             squares[i].style.display = "block";
//         }
// 
// })

resetButton.addEventListener("click", function(){
    // generate new colours
    reset()
})

colorDisplay.textContent = pickedColor;

for(var i = 0; i < squares.length; i++){
    //add click listeners
    squares[i].addEventListener("click", function(){
        //grab color of square
        var clickedColor = this.style.backgroundColor;
        //compare with main square
        if(clickedColor === pickedColor){
            messageDisplay.textContent = "Correct!";
            resetButton.textContent = "Play Again?";
            changeColors(clickedColor);
            h1.style.backgroundColor = clickedColor;
        } else {
            this.style.backgroundColor = "#232323";
            messageDisplay.textContent = "Try Again";
        }
    });
}

function changeColors(color){
    //loop thru squres
    for(var i = 0; i < squares.length; i++){
        squares[i].style.backgroundColor = color;
    }
    //chagne squares to match
}

function pickColor(){
    var random = Math.floor(Math.random() * colors.length);
    return colors[random];
}


function generateRandomColors(num){
    //make array
    var arr = [];
    //repeat num times
    for(var i = 0; i < num; i++){
        arr.push(randomColor());
        //get random color and push to arr
    }
    //return array
    return arr;
}

function randomColor(){
    // pick a red from 0 - 255,
    // pick green, blue, per above
    var r = Math.floor(Math.random() * 256);
    var g = Math.floor(Math.random() * 256);
    var b = Math.floor(Math.random() * 256);
    return "rgb(" + r + ", " + g + ", " + b +")";
}