/*fazer com que o computador escolha uma opção aleatória*/
const choice_arr = ['rock','paper','scissors']

function getComputerChoice() {
    var choice_index = Math.floor(Math.random()*3)
    return choice_arr[choice_index]
}

function playRound(playerSelection,computerSelection) {
    winningList = ["rock-scissors","paper-rock","scissors-paper"]
    roundPlay = playerSelection+"-"+computerSelection
    let roundWinnerMessage
    if (playerSelection==computerSelection){
        roundWinnerMessage =`Player has chosen: ${playerSelection}.\nComputer has chosen: ${computerSelection}.\nThis round is drawn!`
    }else if (winningList.includes(roundPlay)){
        roundWinnerMessage = `Player has chosen: ${playerSelection}.\nComputer has chosen: ${computerSelection}.\nPlayer Wins round!`
        playerScore += 1
    }else{
        roundWinnerMessage = 
            `Player has chosen: ${playerSelection}. Computer has chosen: ${computerSelection}. Computer Wins round!`
        computerScore += 1
    }
    roundNumber += 1
    result.textContent = roundWinnerMessage
    score.textContent = `The Score of the Game is: player: ${playerScore}, computer: ${computerScore}`
    if (playerScore == 3){
        alert("Player Wins!")
        score.textContent = `The Score of the Game is: player: ${playerScore}, computer: ${computerScore}. Player Wins.`
        playerScore = 0
        computerScore = 0
    }else if (computerScore == 3){
        alert("Computer Wins!")
        score.textContent = `The Score of the Game is: player: ${playerScore}, computer: ${computerScore}. Computer Wins.`
        playerScore = 0
        computerScore = 0
    }
    return true
}



const buttons = document.querySelectorAll('button')
const result = document.querySelector('#winner')
const score = document.querySelector('#score')
let playerSelection = buttons.forEach((button) => {
        button.addEventListener('click',() => {
            playRound(button.id,getComputerChoice());
        })
    }
)

let roundNumber = 1
let playerScore = 0
let computerScore = 0