/*fazer com que o computador escolha uma opção aleatória*/
const choice_arr = ['rock','paper','scissors']
function getComputerChoice() {
    var choice_index = Math.floor(Math.random()*3)
    return choice_arr[choice_index]
}

function playRound(playerSelection,computerSelection) {
    playerSelection = playerSelection.toLowerCase()
    winningList = ["rock-scissors","paper-rock","scissors-paper"]
    roundPlay = playerSelection+"-"+computerSelection
    if (playerSelection==computerSelection){
        return "draw"
    }else if (winningList.includes(roundPlay)){
        return "player"
    }else{
        return "computer"
    }
}



/*game itself: its a best of five. First one to get 5 points, wins*/
function game() {
    /*no início do jogo, temos:*/
    let roundNumber = 1
    let playerScore = 0
    let computerScore = 0

    while (true){
        /*receber input do player*/
        var playerSelection = prompt(`Round ${roundNumber}!\nSelect Rock, Paper or Scissors:`)
        playerSelection = playerSelection.toLowerCase()
        while (choice_arr.includes(playerSelection)==false){
            playerSelection = prompt("player has chosen: "+playerSelection+".\nThis is not a valid entry. Please try again:")
            playerSelection = playerSelection.toLowerCase()
        }
        /*receber input do computador*/
        var computerSelection = getComputerChoice()
        /*obter vencedor e alertar msg*/
        if (playRound(playerSelection,computerSelection)==="draw") {
            alert(`player has chosen: ${playerSelection}.\ncomputer has chosen: ${computerSelection}.\nThis round is drawn!`+
            `\nThe Score of the Game is: player: ${playerScore}, computer: ${computerScore}`)
            roundNumber+=1
        }else if (playRound(playerSelection,computerSelection)==="player") {
            playerScore+=1
            alert(`player has chosen: ${playerSelection}.\ncomputer has chosen: ${computerSelection}.\nplayer Wins round ${roundNumber}!`+
            `\nThe Score of the Game is: player: ${playerScore}, computer: ${computerScore}`)
            roundNumber+=1
        }else if (playRound(playerSelection,computerSelection)==="computer") {
            computerScore+=1
            alert(`player has chosen: ${playerSelection}.\ncomputer has chosen: ${computerSelection}.\nComputer Wins round ${roundNumber}!`+
            `\nThe Score of the Game is: player: ${playerScore}, computer: ${computerScore}`)
            roundNumber+=1
        }
        /*Checagem de término de jogo*/
        if (playerScore == 3){
            return alert("Player Wins!")
        }else if (computerScore == 3){
            return alert("Computer Wins!")
        }
    }
}