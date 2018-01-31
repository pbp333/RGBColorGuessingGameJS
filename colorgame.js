var numSquares = 6;
var colors = [];
var pickedColor;

var h1 = document.querySelector("h1");
var resetButton = document.querySelector("#reset");
var modeButtons = document.querySelectorAll(".mode");
var squares = document.querySelectorAll(".square");
var colorDisplay = document.getElementById("colorDisplay");
var messageDisplay = document.getElementById("messageDisplay");

init();

function init(){

	reset();

	for(var i = 0; i < modeButtons.length; i++){
		modeButtons[i].addEventListener("click", function(){
			modeButtons[0].classList.remove("selected");
			modeButtons[1].classList.remove("selected");
			this.classList.add("selected");
			if(this.textContent === "Easy" && numSquares === 6){
				numSquares = 3;
				hideBottomSquares();
				reset();
			} else if (this.textContent === "Hard" && numSquares === 3){
				numSquares = 6;
				showBottomSquares();
				reset();
			}
		});
	}
}

resetButton.addEventListener("click", reset);

function paintSquares(){

	for(var i = 0; i < squares.length; i++){
		squares[i].style.backgroundColor = colors[i];
		squares[i].addEventListener("click", function(){
			var clickedColor = this.style.backgroundColor;
			if (clickedColor === pickedColor){
				messageDisplay.textContent = "Correct!!";
				resetButton.textContent = "Play Again!"
				changeColors(clickedColor);
				h1.style.backgroundColor = pickedColor;

			} else {
				this.style.backgroundColor = "#232323";
				messageDisplay.textContent = "Try Again!";
			}
		});
	}
};

function changeColors(color){
	for(var i = 0; i < squares.length; i++){
		squares[i].style.backgroundColor = color;
	}
};

function pickColor(){
	var random = Math.floor(Math.random() * colors.length);
	return colors[random];
};

function generateRandomColors(numColors){
	var arr = [];
	for(var i = 0; i < numColors; i++){
		arr.push(randomColor());
	}
	return arr;
};

function randomColor(){
	var red = Math.floor(Math.random() * 256);
	var green = Math.floor(Math.random() * 256);
	var blue = Math.floor(Math.random() * 256);
	return "rgb(" + red + ", " + green + ", " + blue + ")";
};

function reset(){
	colors = generateRandomColors(numSquares);
	pickedColor = pickColor();
	messageDisplay.textContent = "";
	colorDisplay.textContent = pickedColor;
	h1.style.backgroundColor = "steelblue";
	resetButton.textContent = "New Colors"
	paintSquares();
};

function hideBottomSquares(){
	for(var i = 3; i < squares.length; i++){
		squares[i].style.display = "none";
	}
};

function showBottomSquares(){
	for(var i = 3; i < squares.length; i++){
		squares[i].style.display = "block";
	}
};
