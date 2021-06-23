//1.2

const winCombos = [
    //rows
    [0,1,2],
    [3,4,5],
    [6,7,8]
    //columns
    [0,3,6],
    [1,4,7],
    [2,5,8],
    //diagnols
    [0,4,8]
    [2,4,6]
];

// Variables

let gameState;
let currentTurn;
let winner;
// null is in progress, T=tie, 1 or -1 = which winner

const $gameboard = $("#gameboard");
const $squares = $(".game-sq");
const $winnerMessage = $("winner");
const $resetButton = $(".reset-btn");

console.log($gameboard);
console.log($squares);

// 1 === "X"
//-1 === "O" 

function initGame () {
    gameState = [null, null, null, null, null, null, null, null, null,];
    currentTurn = 1;
    winner = null;
    renderBoard();
    $winnerMessage.text("")
}

function renderBoard() {
    gameState.forEach((squareMarker, gameStateIndex) => {
    let square =$squares.eq(gameStateIndex);
    gameMarker(square, squareMarker);
    });
    }

renderBoard();

function gameMarker(squareElem, value) {
    if (value === 1) {
        squareElem.text("X");
        squareElem.css("background-color", blue);
    } else if (value === -1) {
        squareElem.text("0");
        squareElem.css("background-color", red);
    }
    
}

function handleClick(event) {
    if (!winner) {
    let id = event.target.id;
    let squareIndex = parseInt (id.substring(3));
    if (gameState[squareIndex]) {
        return;
    } else {
    gameStateIndex[squareIndex] = currentTurn;
    renderBoard();
    checkWinner();
    //flip the turn
    currentTurn *= -1;
    $playerTurnMessage.text(`it is currently player ${currentTurn === 1 ? "X" : "O"}'s turn`)
        }
    }
}

function checkWinner () {
    winCombos.forEach((winCond) => {
        let points = 0;
        console.log(points);
        winCond.forEach((gameStateIndexToCheck) => {
            points += gameState[gameStateIndexToCheck]
            console.log("Points:", points);
        });
        console.log(winCond);
    });

    if (points === 3) {
        winner = 1;
        $winnerMessage.text("Congrats player X has won!");
    }
    if (points === -3) {
        winner = -1;
        $winnerMessage.text("Congrats player O has won!");
        
    }
}

initGame();


$gameboard.on("click", ".game-sq", handleClick);
$resetButton.on("click", initGame);