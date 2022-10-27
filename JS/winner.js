    //Show winner

const showWinner = () => {
    let winnerShow = sessionStorage.getItem('winner');
    if (winnerShow == "X") {
        document.getElementById('winnerIs').innerHTML = `Ha ganado: ${sessionStorage.getItem('Player1Data')}`;
    } else {
        document.getElementById('winnerIs').innerHTML = `Ha ganado: ${sessionStorage.getItem('Player2Data')}`;
    }
    
};

showWinner();