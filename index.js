var button = document.querySelector(".button");
var timeLeft = 0;
const quizContainer = document.getElementById('aQuiz');
const resultsContainer = document.getElementById('results');
const submitButton = document.getElementById('submitQuiz');
var timerEl = document.getElementById("timeLeft");
var choiceOne = document.getElementById("choiceOne");
var choiceTwo = document.getElementById("choiceTwo");
var questionEl = document.getElementById("question");
var choiceThree = document.getElementById("choiceThree");
var choiceFour = document.getElementById("choiceFour");
var count = 0;
var animeQuestions = [
    {
        question: "What animal is Naruto's Jinchuriki?",
        choices:
            ["Fox",
                "Rabbit",
                "Snake",
                "Monkey"],

        answer: "Fox"

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
    promptQuestions()
}

function nextQuestion() {
    count++
    if (count >= animeQuestions.length) {
        quizComplete()
    } else {
        startQuiz();
    }

}
function gameOver() {
    if (count <= animeQuestions.length) {
        prompt("Game Over")
    }
}
//  Recieved help from tutor and classmates
function quizComplete() {
    clearInterval(timer)
}

choiceOne.addEventListener("click", nextQuestion);
choiceTwo.addEventListener("click", nextQuestion);
choiceThree.addEventListener("click", nextQuestion);
choiceFour.addEventListener("click", nextQuestion);

function promptQuestions() {
    questionEl.textContent = animeQuestions[count].question;
    document.getElementById("choiceOne").textContent = animeQuestions[count].choices[0];
    document.getElementById("choiceTwo").textContent = animeQuestions[count].choices[1];
    document.getElementById("choiceThree").textContent = animeQuestions[count].choices[2];
    document.getElementById("choiceFour").textContent = animeQuestions[count].choices[3];
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