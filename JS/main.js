//Winner combinations

const winMoves = [
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
	return winMoves.some(comb => {
		return comb.every(index => {
			return cellList[index].innerHTML === playerTurn;
		});
	})
}

// Draw in cell

const cellsCollection = document.getElementsByClassName("cell");
const cellList = Array.from(cellsCollection);

    //Player VS Player

let gameTurnFlag = true; // True represents Player 1 - False represents Player 2
const PlayerVSPlayer = () => {cellList.map((cell)=>{
    cell.addEventListener('click',()=>{
        let turn = gameTurnFlag ? 'X' : 'O';
        if (cell.innerHTML == "") {
            cell.innerHTML = turn;
            if (checkWin(turn)) {
                window.location.href = "../pages/winner.html";
                resetGame();
            } else if (draw()) {
                alert('It is a draw!');
            }
            gameTurnFlag = !gameTurnFlag;

            if (player2.selector == "2") {
                CPUMoves();
            } else {
                false;
            }  
            //evalua jugador cpu si cpu lanza metodo cpu si no return false
        };
    });
})};

PlayerVSPlayer();    

function draw() {
	return cellList.every(cell => {
		return cell.innerHTML === 'X' || cell.innerHTML === 'O';
	})
}

// Players

const player1 = {
    player: document.getElementById("selectorPlayer1").value, //CPU o Player?
    name: document.getElementById("player1"),  //Player's name
}


const player2 = {
    player: document.getElementById("selectorPlayer2").value, 
    name: document.getElementById("player2"),  
}

// Saving players' data in sesionStorage

function saveData () {
    let player1Data = document.getElementById('player1');
    let player2Data = document.getElementById('player2');
    let selectPlayer2 = document.getElementById("selectPlayer2");
    
    let player1DataValue =  player1Data.value;
    let player2DataValue =  player2Data.value;
    let selectPlayer2Value = selectPlayer2.value;
    
    sessionStorage.setItem("Player1Data", player1DataValue);
    sessionStorage.setItem("Player2Data", player2DataValue);
    sessionStorage.setItem("selectPlayer2Data", selectPlayer2Value);
}

// Getting the players' data from the sesionStorage
    
function getInfo () {
    document.getElementById('Player1Display').innerHTML = sessionStorage.getItem('Player1Data');
    document.getElementById('Player2Display').innerHTML = sessionStorage.getItem('Player2Data');
    let selectCPU = document.getElementById("selectCPU");
    let selectCPUValue = selectCPU.value;
    sessionStorage.setItem("selectCPU", selectCPUValue);  
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
    gameBoard.classList.remove('visually-hidden');  //removes the hidden class so the board shows up
    getInfo();
});

//Player VS CPU

let Player2_CPU = sessionStorage.getItem('selectCPU');

if (player2.selector == "2"){     //NOT WORKING!!!!!
    player2.name = "CPU";
}



    // CPU (randomize moves)

const CPUMoves = () => {
    let move = parseInt(Math.random() *9);
    while (cellList[move].innerHTML !== "") {
        move = parseInt(Math.random() *9);
    }
}



// Show winner's name and not X or O  ---   save winner's name on sesion storage in order to show later?????



