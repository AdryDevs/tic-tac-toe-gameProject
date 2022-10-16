//Winner combinations

const winner_comb = [
	[0, 1, 2],
	[3, 4, 5],
	[6, 7, 8],
	[0, 3, 6],
	[1, 4, 7],
	[2, 5, 8],
	[0, 4, 8],
	[2, 4, 6]
]

    //Check 

function checkWin(playerTurn) {
	return winner_comb.some(comb => {
		return comb.every(index => {
			return cellList[index].innerHTML === playerTurn;
		});
	})
}

// Draw in cell

const cellsCollection = document.getElementsByClassName("cell");
const cellList = Array.from(cellsCollection);
let gameTurnFlag = true; // True represents Player 1 - False represents Player 2
cellList.map((cell)=>{
    cell.addEventListener('click',()=>{
        let turn = gameTurnFlag ? 'X' : 'O';
        if (cell.innerHTML == "") {
            cell.innerHTML = turn;
            if (checkWin(turn)) {
                alert(`${turn} won the game`);
                resetGame();
            } else if (draw()) {
                alert('It is a draw!');
            }

            gameTurnFlag = !gameTurnFlag;
        };
    });
});

function draw() {
	return cellList.every(cell => {
		return cell.innerHTML === 'X' || cell.innerHTML === 'O';
	})
}

// Players

const player1 = {
    player: document.getElementById("selectorPlayer1").value, //CPU o Player?
    name: document.getElementById("player1"),  //Player's name
    selector: document.getElementById("signPlayer1")   // X or O?
}


const player2 = {
    player: document.getElementById("selectorPlayer2").value, 
    name: document.getElementById("player2"),  
    selector: document.getElementById("signPlayer2")   
}

if (player1.selector === "CPU"){
    player1.name = "CPU";
}

if (player2.selector == "CPU"){
    player2.name = "CPU";
}

// Converting and saving players' data in sesionStorage

function saveData () {
    let player1Data = document.getElementById('player1');
    let player2Data = document.getElementById('player2');
    
    let player1DataValue =  player1Data.value;
    let player2DataValue =  player2Data.value;
    
    sessionStorage.setItem("Player1Data", player1DataValue);
    sessionStorage.setItem("Player2Data", player2DataValue);
}



// Re-converting and getting the players' data from the sesionStorage



    
    function getInfo () {
        document.getElementById('Player1Display').innerHTML = sessionStorage.getItem('Player1Data');
        document.getElementById('Player2Display').innerHTML = sessionStorage.getItem('Player2Data');
    }

// Reset Game

const reset = document.getElementById("reset");
reset.addEventListener('click', () => {
    resetGame();
});

function resetGame() {
    cellList.forEach(element => {
        element.innerHTML = "";
    });
}

// New Game

const start = document.getElementById("start");
const gameBoard = document.getElementById("gameBoard");

start.addEventListener('click', () => {
    saveData();
    gameBoard.classList.remove('visually-hidden');  //removing the hidden class so it shows up!
    getInfo();
});

// CPU (randomize moves)

// 1. look for the cells with no value
// example: a = [1, 3, 4, 7]
// randomPos = Math.random(0, a.length - 1)
// cellList[randomPos] = turn



