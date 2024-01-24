let homeScore = document.getElementById("home-score");
let awayScore = document.getElementById("away-score");

let newHomeScore = 0
let newAwayScore = 0

// Home Buttons
function homeplus1() {
  newHomeScore = newHomeScore + 1
  homeScore.innerText = newHomeScore
}

function homeplus2() {
  newHomeScore = newHomeScore + 2
  homeScore.innerText = newHomeScore
}

function homeplus3() {
  newHomeScore = newHomeScore + 3
  homeScore.innerText = newHomeScore
}

// Away Buttons
function awayplus1() {
  newAwayScore = newAwayScore + 1
  awayScore.innerText = newAwayScore
}
function awayplus2() {
  newAwayScore = newAwayScore + 2
  awayScore.innerText = newAwayScore
}
function awayplus3() {
  newAwayScore = newAwayScore + 3
  awayScore.innerText = newAwayScore
}