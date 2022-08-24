/*fazer com que o computador escolha uma opção aleatória*/
function getComputerChoice() {
    var choice_index = Math.floor(Math.random()*3)
    var choice_arr = ['Rock','Paper','Scissors']
    return choice_arr[choice_index]
}
