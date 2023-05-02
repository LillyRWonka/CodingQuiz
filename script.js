var outerC = document.querySelector(".outer-container");
var innerC = document.querySelector(".inner-container");
var startButton = document.querySelector("#start-button");
var questionsEl = document.querySelector(".questions")
var interval
var secondsLeft = 60
var timerEl = document.querySelector("#timer")
var qTitleEl = document.querySelector("#q-title")
var questionIndex = 0
var answer1El = document.querySelector("#answer1")
var answer2El = document.querySelector("#answer2")
var answer3El = document.querySelector("#answer3")
var answer4El = document.querySelector("#answer4")
var quizComplete = document.querySelector(".quiz-complete")
var highScores = document.querySelector(".high-scores")


const questions = [
    
    {
        question: "What is the DOM?",
        answers: [
            {text: "Direct Over seer", correct: false},
            {text: "Document Object Model", correct: true},
            {text: "Diverse oriental rug", correct: false},
            {text: "Dairy object milk", correct: false},
        ]
    },    
    {
        question: "Which is not an element?",
        answers: [
            {text: "main", correct: false},
            {text: "google", correct: true},
            {text: "header", correct: false},
            {text: "section", correct: false},
        ]
    },    
    {
        question: "What is it called to store multiple values in a single variable?",
        answers: [
            {text: "String", correct: false},
            {text: "Array", correct: true},
            {text: "Variable", correct: false},
            {text: "function", correct: false},
        ]
    },    
    {
        question: "What is and API?",
        answers: [
            {text: "All points in", correct: false},
            {text: "Application Programming Interfaces", correct: true},
            {text: "Any person intersted", correct: false},
            {text: "Array points inward", correct: false},
        ]
    }    
]


function startGame() {
timer()
innerC.classList.add("hide")
questionsEl.classList.remove("hide")
nextQuestion()
}

function endGame() {
    quizComplete.classList.remove("hide")
    questionsEl.classList.add("hide")
    
    }

function nextQuestion() {
qTitleEl.textContent = questions[questionIndex].question
answer1El.textContent = questions[questionIndex].answers[0].text
answer2El.textContent = questions[questionIndex].answers[1].text
answer3El.textContent = questions[questionIndex].answers[2].text
answer4El.textContent = questions[questionIndex].answers[3].text

answer1El.correct = questions[questionIndex].answers[0].correct
answer2El.correct = questions[questionIndex].answers[1].correct
answer3El.correct = questions[questionIndex].answers[2].correct
answer4El.correct = questions[questionIndex].answers[3].correct

answer1El.addEventListener("click", checkQuestion)
answer2El.addEventListener("click", checkQuestion)
answer3El.addEventListener("click", checkQuestion)
answer4El.addEventListener("click", checkQuestion)



}



function timer() {
interval = setInterval(function() {
    if (secondsLeft <= 1){
        clearInterval(interval)
    }
secondsLeft--
timerEl.textContent = "Time: 00:" + secondsLeft
}, 1000)
}
 function checkQuestion(event) {
    console.log(event);

    // var correctAnswer = 
    var userAnswer = event.target.textContent
    var currentQuestion = questions[questionIndex]
    console.log(event.target.correct)
    var answers = currentQuestion.answers[questionIndex].text
    
    if (event.target.correct) {
        // When correct answer is chosen
        if (questionIndex == 3) {
            // last question
            endGame();
        }
        else {
            // game continuing
        questionIndex++; 
        nextQuestion();
        }
    }
    else { 
        // when wrong answer is chosen
        secondsLeft -= 15
        // When timer runs out
        if (secondsLeft <= 0) {
            endGame()
        }
    }

    
    



 }


 function gameOver() {
    console.log("Game Over");
 }



startButton.addEventListener("click", startGame);
