const prompt = require("prompt-sync")();

function getComputerChoice() {
    let computer_choice = null;
    let random = Math.random();
    if (random > .66) {
        computer_choice = "rock";
    } else if (random > .33) {
        computer_choice = "paper";
    } else {
        computer_choice = "scissors";
    }
    return computer_choice
}

function getHumanChoice() {
    return prompt("rock, paper, or scissors: ")
}

let computer_choice = getComputerChoice();
let human_choice = getHumanChoice();
if (human_choice === "rock") {
    if (computer_choice === "scissors") {
        console.log("Computer chose scissors! You win!");
    } else if (computer_choice === "paper") {
        console.log("Computer chose paper. You lose.");
    } else {
        console.log("Computer chose rock as well! It's a tie!");
    }
} else if (human_choice === "paper") {
    if (computer_choice === "rock") {
        console.log("Computer chose rock! You win");
    } else if (computer_choice === "scissors") {
        console.log("Computer chose scissors. You lose");
    } else {
        console.log("Computer chose paper as well! It's a tie!");
    }
} else if (human_choice === "scissors") {
    if (computer_choice === "paper") {
        console.log("Computer chose paper! You win!");
    } else if (computer_choice === "rocke") {
        console.log("Computer chose rock. You lose");
    } else {
        console.log("Computer also chose scissors! It's a tie!")
    }
} else {
    console.log("Invalid choice! Please choose rock, paper, or scissors!");
}