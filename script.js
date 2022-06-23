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
    playerSelection = playerSelection.toLowerCase()  

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

function game() {
    for (let i = 0; i < 5; i++) {
        let playerSelection = prompt("Rock, paper or scissors?", "") //Handle wrong player input
        let computerSelection = computerPlay()

        let result = playRound(playerSelection, computerSelection)

        let playerScore = 0
        let computerScore = 0

        if (result === "win") {
            playerScore++
        } else if (result === "loss") {
            computerScore++
        }
        
        console.log(`Player Score: ${playerScore}`)
        console.log(`Computer Score: ${computerScore}`)
        console.log("")

        //Add a timer between the game rounds
    }
}

game()