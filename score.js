console.log("Javascript is connected");

// Variables & eventlisteners

var lblScoreTeam1 = document.getElementById("scoreTextTeam1");
var lblScoreTeam2 = document.getElementById("scoreTextTeam2");
var lblWinningTeam = document.getElementById("winningTeamLabel");

var btnIncrementTeam1 = document.getElementById("incrementTeam1");
var btnIncrementTeam2 = document.getElementById("incrementTeam2");

var scoreTeam1 = 0;
var scoreTeam2 = 0;

btnIncrementTeam1.addEventListener("click", incrementScore1);
btnIncrementTeam2.addEventListener("click", incrementScore2);

// Increment score team 1
function incrementScore1() {
    scoreTeam1++;
    console.log("Team 1 scored " + scoreTeam1 + " points.");
    lblScoreTeam1.textContent = scoreTeam1;

    if (scoreTeam1 === 5) {
        endGame();
    }
}

// Increment score team 2
function incrementScore2() {
    scoreTeam2++;
    console.log("Team 2 scored " + scoreTeam2 + " points.")
    lblScoreTeam2.textContent = scoreTeam2;

    if (scoreTeam2 === 5) {
        endGame();
    }
}

// Helper function to end the game
function endGame() {
    console.log("The game has ended");

    if (scoreTeam1 === 5) {
        // Team 1 is the winner
        lblWinningTeam.textContent = "Team 1";
    } else {
        // Team2 is the winner
        lblWinningTeam.textContent = "Team 2";
    }

    btnIncrementTeam1.classList.add("disabled");
    btnIncrementTeam1.removeEventListener("click", incrementScore1);

    btnIncrementTeam2.classList.add("disabled");
    btnIncrementTeam2.removeEventListener("click", incrementScore2);
}