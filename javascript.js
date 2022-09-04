/*fazer com que o computador escolha uma opção aleatória*/
const choice_arr = ['bulbasaur','charmander','squirtle']
const opponentChoiceArr = ['opponent-1','opponent-2','opponent-3']
function getComputerChoice() {
    var choice_index = Math.floor(Math.random()*3)
    return choice_arr[choice_index]
}

function getOpponent() {
    var choice_index = Math.floor(Math.random()*3)
    return opponentChoiceArr[choice_index]
}

function playRound(playerSelection,computerSelection) {
    winningList = ["bulbasaur-squirtle","charmander-bulbasaur","squirtle-charmander"]
    roundPlay = playerSelection+"-"+computerSelection
    currentDisplayImage.setAttribute('src',`./GUI/battle/pokemon/initial-empty-empty.png`)
    setTimeout(()=>{currentDisplayImage.setAttribute('src',`./GUI/battle/pokemon/initial-${playerSelection}-empty.png`)},1000);
    setTimeout(()=>{currentDisplayImage.setAttribute('src',`./GUI/battle/pokemon/initial-${playerSelection}-${computerSelection}.png`)},2000);
    let roundWinnerMessage
    setTimeout(()=>{
        currentDisplayImage.setAttribute('src',`./GUI/battle/pokemon/battle-${playerSelection}-${computerSelection}.png`)
        if (winningList.includes(roundPlay)){
            playerScore += 1
        }else if (playerSelection==computerSelection){
           
        }else{
            computerScore += 1
        }
        roundNumber += 1
        result.textContent = roundWinnerMessage
        score.textContent = `Player: ${playerScore}, Computer: ${computerScore}`
        if (playerScore == 3){
            score.textContent = `The Score of the Game is: player: ${playerScore}, computer: ${computerScore}. Player Wins.`
            currentDisplayImage.setAttribute('src',`./GUI/battle/${getOpponent()}/lose.png`)
            //restart game:
            setTimeout(() => {currentDisplayImage.setAttribute('src',`./GUI/battle/${getOpponent()}/begin.png`)}, 4000); 
            playerScore = 0
            computerScore = 0
            roundNumber = 0
        }else if (computerScore == 3){
            score.textContent = `The Score of the Game is: player: ${playerScore}, computer: ${computerScore}. Computer Wins.`
            currentDisplayImage.setAttribute('src',`./GUI/battle/${getOpponent()}/win.png`)
            //restart game:
            setTimeout(() => {currentDisplayImage.setAttribute('src',`./GUI/battle/${getOpponent()}/begin.png`)}, 4000);
            playerScore = 0
            computerScore = 0
            roundNumber = 0
        }
        return true
    },4000)
}
const pokemonMusic = document.querySelector('audio')
const gameDisplay = document.querySelector('#game-display')
let currentDisplayImage = document.createElement('img')
currentDisplayImage.setAttribute('src',`./GUI/battle/${getOpponent()}/begin.png`)
currentDisplayImage.setAttribute('id',`displayImage`)
gameDisplay.appendChild(currentDisplayImage)
const startButton = document.querySelector('#start')
const buttons = document.querySelectorAll('button.selector')
const result = document.querySelector('#winner')
const score = document.querySelector('#score')

const divStart = document.querySelector('div.start')
startButton.addEventListener('click',() => {
    
    divStart.removeChild(startButton)
    currentDisplayImage.style.visibility = 'visible'
    pokemonMusic.play()
    buttons.forEach((button) => {
        button.style.visibility = 'visible'
    });
})
let playerSelection = buttons.forEach((button) => {
        button.addEventListener('click',() => {
            playRound(button.id,getComputerChoice());
        })
    }
)

let roundNumber = 1
let playerScore = 0
let computerScore = 0