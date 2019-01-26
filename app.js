
//Score Vars
let userScore = 0;
let compScore = 0;

//Div Reference Vars 
const userScoreSpan = document.getElementById("user-score");
const compScoreSpan = document.getElementById("comp-score");
const gameScoreBoardDiv = document.querySelector(".score-board");
const gameResultDiv = document.querySelector(".result");
const gameResultText = document.querySelector(".result>p");
const gameRoundMessageDiv = document.querySelector(".round-message>p");

//Game Element Selectors
const rock_div = document.getElementById("rock");
const paper_div = document.getElementById("paper");
const scissor_div = document.getElementById("scissor");

//Function to generate computer choice randomly 
function getCompChoice(){
    const compChocies = ['r','p','s'];
    const randomNumber = Math.floor(Math.random() * 3);
    return compChocies[randomNumber];
}

//Converts passed letter to word for showing user selection
function convertToWord(letter){
    if(letter === "r")
        return "Rock";
    else if(letter === "p")
        return "Paper";
    else 
        return "Scissor";    
}

//Runs whenever user wins the round of the game
function win(userChoice,computerChoice){
    userScore++;
    userScoreSpan.innerHTML = userScore;
    gameResultDiv.style.border = "3px solid green";
    gameResultDiv.style.color = "green";
    gameResultText.innerHTML = "YOU WIN!";
    const smallUserWord = "user".fontsize(3).sub();
    const smallCompWord = "comp".fontsize(3).sub();
    gameRoundMessageDiv.innerHTML = `${convertToWord(userChoice)}${smallUserWord}  beats  ${convertToWord(computerChoice)}${smallCompWord}`;
}

//Runs whenever user looses the round of the game
function lose(userChoice,computerChoice){
    compScore++;
    compScoreSpan.innerHTML = compScore;
    gameResultDiv.style.border = "3px solid red";
    gameResultDiv.style.color = "red";
    gameResultText.innerHTML = "YOU LOST!";
    const smallUserWord = "user".fontsize(3).sub();
    const smallCompWord = "comp".fontsize(3).sub();
    gameRoundMessageDiv.innerHTML = `${convertToWord(userChoice)}${smallUserWord}  looses to  ${convertToWord(computerChoice)}${smallCompWord}`;
}

//Runs whenever a draw has happened in the round of the game
function draw(userChoice,computerChoice){
    gameResultDiv.style.border = "3px solid white";
    gameResultDiv.style.color = "white";
    gameResultText.innerHTML = "IT'S A DRAW";
    const smallUserWord = "user".fontsize(3).sub();
    const smallCompWord = "comp".fontsize(3).sub();
    gameRoundMessageDiv.innerHTML = `${convertToWord(userChoice)}${smallUserWord} equals ${convertToWord(computerChoice)}${smallCompWord}`;
}

//Main Function that runs the game
function runGame(userChoice){
    const computerChoice = getCompChoice();

    //compares the users and computers choice and calls the appropriate function
    switch(userChoice+computerChoice){
        case "rs":
        case "pr":
        case "sp":
            win(userChoice,computerChoice);
            break;
        case "rp":
        case "ps":
        case "sr":
            lose(userChoice,computerChoice);
            break;
        case "rr":
        case "pp":
        case "ss":
            draw(userChoice,computerChoice);
            break;               
    }
}

function main(){
    //Game element click listeners
    rock_div.addEventListener('click',() => runGame("r"));
    paper_div.addEventListener('click',() => runGame("p"));
    scissor_div.addEventListener('click',() => runGame("s"));
}

main();
