document.body.innerHTML = `
    <input id="question" placeholder="Постав своє питання...">
    <div id="ball">Запитай мене</div>
    <button id="askBtn">Запитати</button>
`;
const input = document.getElementById("question");
const ball = document.getElementById("ball");
const btn = document.getElementById("askBtn");
const answers = [
    "Так", "Ні", "Можливо", "Спробуй пізніше",
    "Безумовно", "Навряд чи", "Не сумнівайся",
    "Я не впевнена", "Звісно", "Точно ні",
    "Питання незрозуміле", "Іди поспи"
];
function getAnswer() {
    const question = input.value.trim();
    if (question === "") {
        ball.textContent = "Спочатку постав питання!";
        return;
    }
    if (!question.endsWith("?")) {
        ball.textContent = "Питання має закінчуватись на ?";
        return;
    }
    ball.textContent = "...";

    setTimeout(() => {
        const random = Math.floor(Math.random() * answers.length);
        ball.textContent = answers[random];
    }, 1000);
}
btn.addEventListener("click", getAnswer);