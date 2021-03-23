var button = document.querySelector(".button");
var timeLeft = 0;
var timerEl = document.getElementById("timeLeft");
var animeQuestions = [
    {
        question: "What animal is Naruto's Jinchuriki?",
        choices:
            ["A: Fox",
                "B: Rabbit",
                "C: Snake",
                "D: Monkey"],

        answer: "A: Fox"

    },
    {
        question: "What is Monster's main villian name?",
        choices:
            ["A: Detective Lunge ",
                "B: Johan Liebert",
                "C: Eva Heinemann",
                "D: Ana Liebert"],

        answer: "B: Johan Liebert"
    },
    {
        question: "What is the name of Yusuke's special ability?",
        choices:
            ["A: Eraser Cannon",
                "B: Galick Gun",
                "C: Spirit Gun",
                "D: Spirit Sword"],

        answer: "C: Spirit Gun"
    },
    {
        question: "What is Eren's Titan From called?",
        choices:
            ["A: Armored Titan",
                "B: Founding Titan",
                "C: Colossal Titan",
                "D: Attack Titan"],

        answer: "D: Attack Titan"
    },
    {
        question: "What is Ash's starter Pokemon?",
        choices:
            ["A: Charmander ",
                "B: Piplup ",
                "C: Pikachu ",
                "D: Eevee "],

        answer: "C: Pikachu"
    }]


function startQuiz() {
    startTimer()


}

function startTimer() {
    timeLeft = 75;
    timer = setInterval(function () {
        if (timeLeft > 1) {
            timerEl.textContent = timeLeft + ' seconds remaining';
            timeLeft--;
        }

        

       


    }, 1000);
}



button.addEventListener("click", startQuiz);