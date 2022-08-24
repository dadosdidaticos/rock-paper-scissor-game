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
    while (choice_arr.includes(playerSelection)==false){
        playerSelection = prompt("player has chosen: "+playerSelection+".\nThis is not a valid entry. Please try again:")
        playerSelection = playerSelection.toLowerCase()
    }
    if (playerSelection==computerSelection){
        return alert(`player has chosen: ${playerSelection}.\ncomputer has chosen: ${computerSelection}.\nThis round is drawn!`)
    }else if (winningList.includes(roundPlay)){
        return alert(`player has chosen: ${playerSelection}.\ncomputer has chosen: ${computerSelection}.\nPlayer Wins!`)
    }else{
        return alert(`player has chosen: ${playerSelection}.\ncomputer has chosen: ${computerSelection}.\nComputer Wins!`)
    }

}
/*receber input do player*/
var playerSelection = prompt("Select Rock, Paper or Scissors:")
/*receber input do computador*/
var computerSelection = getComputerChoice()
console.log(playRound(playerSelection,computerSelection))