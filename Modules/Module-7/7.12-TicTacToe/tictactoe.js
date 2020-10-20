let playerTurn = true;
let computerMoveTimeout = 0;

window.addEventListener("DOMContentLoaded", domLoaded);

function domLoaded() {
	// Setup the click event for the "New game" button
	let newBtn = document.getElementById("newGameButton");
	newBtn.addEventListener("click", newGame);

	// Create click-event listeners for each cell in the game board
	let cells = getGameBoard();
	for (let cell of cells) {
		cell.addEventListener("click", function () { cellClicked(cell); });
	}

	// Call newGame() to make sure the board is clear
	newGame();
}

// Returns an array of 9 <td> elements that make up the game board. The first 3 
// elements are the top row, the next 3 the middle row, and the last 3 the 
// bottom row. 
function getGameBoard() {
	let gameBoardTable = document.getElementById("gameBoard");
	let result = [];
	for (let i = 0; i < 3; i++) {
		for (let j = 0; j < 3; j++) {
			result.push(gameBoardTable.rows[i].cells[j]);
		}
	}
	return result;
}

function newGame() {
	// TODO: Complete the function
}

function cellClicked(cell) {
	// TODO: Complete the function
}

function switchTurn() {
	// TODO: Complete the function
}

function makeComputerMove() {
	// TODO: Complete the function
}
