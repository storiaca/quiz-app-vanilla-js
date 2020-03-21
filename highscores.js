const highScoresList = document.getElementById("highscoresList");
const highScores = JSON.parse(localStorage.getItem("highScores")) || [];

console.log(
  highScores.map(score => {
    console.log(`<li class="high-score">${score.name}-${score.score}</li>`);
  })
);

console.log("hello");
