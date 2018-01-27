var numSquares = 6;

var colors = generateRandomColors(numSquares);

var h1 = document.querySelector("h1");

var resetButton = document.querySelector("#reset");
var easyButton = document.querySelector("#easyButton");
var hardButton = document.querySelector("#hardButton");

var squares = document.querySelectorAll(".square");
var pickedColor = pickColor();
var colorDisplay = document.getElementById("colorDisplay");
var messageDisplay = document.getElementById("messageDisplay");

colorDisplay.textContent = pickedColor;

easyButton.addEventListener("click", function(){
	if(numSquares === 3){
		return;
	}
	easyButton.classList.add("selected");
	hardButton.classList.remove("selected");
	hideBottomSquares();
	numSquares = 3;
	reset();
})


hardButton.addEventListener("click", function(){
	if(numSquares === 6){
		return;
	}
	hardButton.classList.add("selected");
	easyButton.classList.remove("selected");
	showBottomSquares();
	numSquares = 6;
	reset();
})

resetButton.addEventListener("click", reset)

function paintSquares(){

	for(var i = 0; i < squares.length; i++){
		squares[i].style.backgroundColor = colors[i];
		squares[i].addEventListener("click", function(){
			var clickedColor = this.style.backgroundColor;
			if (clickedColor === pickedColor){
				messageDisplay.textContent = "Correct!!";
				reset.textContent = "Play Again!"
				changeColors(clickedColor);
				h1.style.backgroundColor = pickedColor;

			} else {
				this.style.backgroundColor = "#232323";
				messageDisplay.textContent = "Try Again!";
			}
		}) 
	}
}

function changeColors(color){
	for(var i = 0; i < squares.length; i++){
		squares[i].style.backgroundColor = color;
	}
}

function pickColor(){
	var random = Math.floor(Math.random() * colors.length);
	return colors[random];
}

function generateRandomColors(numColors){
	var arr = [];
	for(var i = 0; i < numColors; i++){
		arr.push(randomColor());
	}
	return arr;
}

function randomColor(){
	var red = Math.floor(Math.random() * 256);
	var green = Math.floor(Math.random() * 256);
	var blue = Math.floor(Math.random() * 256);
	return "rgb(" + red + ", " + green + ", " + blue + ")";
}

function reset(){
	colors = generateRandomColors(numSquares);
	pickedColor = pickColor();
	colorDisplay.textContent = pickedColor;
	h1.style.backgroundColor = "steelblue";
	reset.textContent = "New Colors"
	paintSquares();
}

function hideBottomSquares(){
	for(var i = 3; i < squares.length; i++){
		squares[i].style.display = "none";
	}
}

function showBottomSquares(){
	for(var i = 3; i < squares.length; i++){
		squares[i].style.display = "block";
	}
}
paintSquares();
