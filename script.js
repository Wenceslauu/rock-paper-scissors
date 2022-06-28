let result
let playerScore = 0
let computerScore = 0

function computerPlay() {
    let randomValue = Math.floor(Math.random() * 3)
    
    switch(randomValue) {
        case 0:
            return "rock"
        case 1:
            return "paper"
        case 2:
            return "scissors"
    }
}

function playRound(playerSelection, computerSelection) { 

    if (playerSelection === "rock" &&  computerSelection === "paper") {
        console.log("You lose! Paper beats rock.")
        return "loss"
    } else if (playerSelection === "rock" &&  computerSelection === "scissors") {
        console.log("You win! Rock beats Scissors.")
        return "win"
    } else if (playerSelection === "paper" &&  computerSelection === "rock") {
        console.log("You win! Paper beats Rock.")
        return "win"
    } else if (playerSelection === "paper" &&  computerSelection === "scissors") {
        console.log("You lose! Scissors beat paper.")
        return "loss"
    } else if (playerSelection === "scissors" &&  computerSelection === "rock") {
        console.log("You lose! Rock beats Scissors.")
        return "loss"
    } else if (playerSelection === "scissors" &&  computerSelection === "paper") {
        console.log("You win! Scissors beat paper.")
        return "win"
    } else if (playerSelection === computerSelection) {
        console.log("It's a tie!")
        return "tie"
    }
}

function updateScores(playerSelection, computerSelection) {
    result = playRound(playerSelection, computerSelection)

    const pScore = document.querySelector('.pScore')
    const cScore = document.querySelector('.cScore')

    if (result === "win") {
        playerScore++
    } else if (result === "loss") {
        computerScore++
    }

    pScore.textContent = `Player score: ${playerScore}`
    cScore.textContent = `Computer score: ${computerScore}`

    if (playerScore === 5) {
        alert("You won!")
        playerScore = 0
        computerScore = 0
    } else if (computerScore === 5) {
        alert("You lost!")
        playerScore = 0
        computerScore = 0
    }
}

const btns = document.querySelectorAll('button')

btns.forEach(button => button.addEventListener('click', e => {
        updateScores(e.target.className, computerPlay())
}))
