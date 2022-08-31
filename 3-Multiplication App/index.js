const scoreEl = document.getElementById("score");
const questionEl = document.getElementById("question");
const inputEl = document.getElementById("input");
const formEL = document.getElementById("form");
const num1 = Math.ceil(Math.random() * 10);
const num2 = Math.ceil(Math.random() * 10);
const correctAnswer = num1 * num2;
let score = JSON.parse(localStorage.getItem("score"));
if (!score) {
    score = 0;
}
questionEl.innerText = `What is ${num1} multiply by ${num2}?`;
scoreEl.innerText = `Score: ${score}`;

formEL.addEventListener("submit", () => {
    const userAnswer = +inputEl.value;
    if (userAnswer === correctAnswer) {
        score++;
        updateScore();
    } else {
        score--;
        updateScore();
    }
});
function updateScore() {
    localStorage.setItem("score", JSON.stringify(score));
}

// TODO: add highest score
// TODO: allow user to change range of number
// TODO: set game over screen when user answer wrong