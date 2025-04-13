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
let computer_choice = null;
let human_choice = null;
let computer_choice_text = null;
let human_choice_text = null;
let round_choice_text = null;
let human_score = 0;
let computer_score = 0;
const Rock = document.getElementById("Rock");
const Paper = document.getElementById("Paper");
const Scissors = document.getElementById("Scissors");
const Human_Score = document.getElementById("Human-Score");
const Computer_Score = document.getElementById("Computer-Score");

Rock.addEventListener("click", () => {
    computer_choice = getComputerChoice();
    human_choice = "rock";
    computer_choice_text = document.getElementById("Computer-Choice-Text");
    human_choice_text = document.getElementById("Human-Choice-Text");
    round_choice_text = document.getElementById("Round-Result-Text");
    if (human_score < 5 && computer_score < 5) {
        human_choice_text.textContent = "You Chose Rock...";
        if (computer_choice === "scissors") {
            computer_choice_text.textContent = "Rob Chose Scissors...";
            round_choice_text.textContent = "You Won The Round!";
            human_score += 1;
            Human_Score.textContent = `You: ${human_score}`;
        } else if (computer_choice === "paper") {
            computer_choice_text.textContent = "Rob Chose Paper...";
            round_choice_text.textContent = "You Lost The Round...";
            computer_score += 1;
            Computer_Score.textContent = `Computer: ${computer_score}`;
        } else {
            computer_choice_text.textContent = "Rob Chose Rock...";
            round_choice_text.textContent = "It's A Tie!";
        }
    } else {
        if (human_score === 5) {
            Human_Score.textContent = "You Won!!!";
            Computer_Score.textContent = "";
        } else {
            Human_Score.textContent = "Get Cooked Kid.";
            Computer_Score.textContent = "";
        };
    }
});


Paper.addEventListener("click", () => {
    computer_choice = getComputerChoice();
    human_choice = "paper";
    computer_choice_text = document.getElementById("Computer-Choice-Text");
    human_choice_text = document.getElementById("Human-Choice-Text");
    round_choice_text = document.getElementById("Round-Result-Text");

    if (human_score < 5 && computer_score < 5) {
        human_choice_text.textContent = "You Chose Paper...";
        if (computer_choice === "scissors") {
            computer_choice_text.textContent = "Rob Chose Scissors...";
            round_choice_text.textContent = "You Lost The Round...";
            computer_score += 1;
            Computer_Score.textContent = `Computer: ${computer_score}`;
        } else if (computer_choice === "paper") {
            computer_choice_text.textContent = "Rob Chose Paper...";
            round_choice_text.textContent = "It's A Tie!";
        } else {
            computer_choice_text.textContent = "Rob Chose Rock...";
            round_choice_text.textContent = "You Won The Round!";
            human_score += 1;
            Human_Score.textContent = `You: ${human_score}`;
        }
    } else {
        if (human_score === 5) {
            Human_Score.textContent = "You Won!!!";
            Computer_Score.textContent = "";
        } else {
            Human_Score.textContent = "Get Cooked Kid.";
            Computer_Score.textContent = "";
        };
    }
});

Scissors.addEventListener("click", () => {
    computer_choice = getComputerChoice();
    human_choice = "scissors";
    computer_choice_text = document.getElementById("Computer-Choice-Text");
    human_choice_text = document.getElementById("Human-Choice-Text");
    round_choice_text = document.getElementById("Round-Result-Text");

    if (human_score < 5 && computer_score < 5) {
        human_choice_text.textContent = "You Chose Scissors...";
        if (computer_choice === "scissors") {
            computer_choice_text.textContent = "Rob Chose Scissors...";
            round_choice_text.textContent = "It's A Tie!";
        } else if (computer_choice === "paper") {
            computer_choice_text.textContent = "Rob Chose Paper...";
            round_choice_text.textContent = "You Won The Round!";
            human_score += 1;
            Human_Score.textContent = `You: ${human_score}`;
        } else {
            computer_choice_text.textContent = "Rob Chose Rock...";
            round_choice_text.textContent = "You Lost The Round...";
            computer_score += 1;
            Computer_Score.textContent = `Computer: ${computer_score}`;
        }
    } else {
        if (human_score === 5) {
            Human_Score.textContent = "You Won!!!";
            Computer_Score.textContent = " ";
        } else {
            Human_Score.textContent = "Get Cooked Kid.";
            Computer_Score.textContent = " ";
        };
    }
});


/* I'll have to have a collect function that takes in the user's input depending on button pressed */
/* Then, I'll replace the logic gates that I have set up to change the heading texts instead of loggin to console */
/* I'll add a score feature that updates the score depending on who wins */
/* I'll add a game end that displays the overall winner for first to 5 */