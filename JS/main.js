// Board

let board = [
    [0, 0, 0],
    [0, 0, 0],
    [0, 0, 0]
];

    //Counting

for (let i = 0; i < board.length; i++){

}

    //Winning moves

if((board[0][0]=="X") && (board[1][0]=="X") && (board[2][0]=="X")) {
    alert("The winner is ", );
}

    //Draw in cell

let cellsCollection = document.getElementsByClassName("cell");

let cells = Array.from(cellsCollection);

let switching = true;

cells.map((cell)=>{
    cell.addEventListener('click',()=>{
        if(cell.innerHTML == ""){
            cell.innerHTML = (switching) ? "X" : "O";
            switching = !switching;
        };
    });
});


// Check if cell is active or not to draw

// si la posición es = 0 ("") entonces pinto círculo o X, si no es ="" no pinto


// Players

let player1 = {
    player: document.getElementById("selectorPlayer1").value, //CPU o Player?
    name: document.getElementById("player1"),  //Player's name
    selector: document.getElementById("signPlayer1")   // X or O?
}


let player2 = {
    player: document.getElementById("selectorPlayer2").value, 
    name: document.getElementById("player2"),  
    selector: document.getElementById("signPlayer2")   
}

if(document.getElementById("slectorPlayer1").value == "CPU"){
    player1.name = "CPU";
}

if(document.getElementById("slectorPlayer2").value == "CPU"){
    player2.name = "CPU";
}

    //Converting and saving players' data in sesionStorage

let player1Conv = JSON.stringify(player1);
let player2Conv = JSON.stringify(player2);

sessionStorage.setItem("Player1Data",player1Conv);
sessionStorage.setItem("Player2Data",player2Conv);

    //Reconverting and getting the players' data from sesionStorage

let storageDataPlayer1 = localStorage.getItem("Player1Data");
let storageDataPlayer2 = localStorage.getItem("Player2Data");

let player1Reconv = JSON.parse(storageDataPlayer1);
let player2Reconv = JSON.parse(storageDataPlayer2);

//Player's Display

let displayPlayer1 = document.getElementById("Player1Display");

displayPlayer1.innerHTML = player1.name;

// New Game

let start = document.getElementById("start");

start = false;

if(start = false){
    
};

// Turns

// CPU (randomize moves)

//Reset


// Draw circle with transition?????


    // circle.enter().append("circle")
    //     .attr("class", "dot");

    // circle
    //     .attr("r", 5)
    //     .attr("cy", 20)
    //     .attr("cx", function(d,i){return i*50;})
    //     .attr("fill", "red");

    // svg.selectAll("circle")
    //     .style("opacity", 0)
    //     .transition()
    //     .duration(1000)
    //     .style("opacity", 1);
