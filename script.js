var startButton = document.querySelector("#button");
var startContainer = document.getElementById("start");
var hiddenQuestion1 = document.getElementById("hidden-question-card1");
var hiddenQuestion2 = document.getElementById("hidden-question-card2");
var hiddenQuestion3 = document.getElementById("hidden-question-card3");
var hiddenQuestion4 = document.getElementById("hidden-question-card4");
var hiddenQuestion5 = document.getElementById("hidden-question-card5");
var hiddenStartEl = document.getElementById("hidden-question");
var questionEl = [hiddenQuestion1, hiddenQuestion2, hiddenQuestion3, hiddenQuestion4, hiddenQuestion5];
var questionIndex = 0;
var quizRunning = false;



function hidden() {
    hiddenQuestion1.style.display = "none";
    hiddenQuestion2.style.display = "none";
    hiddenQuestion3.style.display = "none";
    hiddenQuestion4.style.display = "none";
    hiddenQuestion5.style.display = "none";

}

// Quiz questions, options and correct answer

var questions = [
    {
        questions: "Javascript is known as what type of language?",
        options: [
            "a: Coffee",
            "b: Cursive",
            "c: Scripting",]
        }
        answer: "c: Scripting",
    {
        question: "Javascript is known for development of?",
        options: [
            "a: web pages",
            "b: coffee beans",
            "c: functions"],
        }
        answer: "a: web pages",

    {
        question: "True or False. Javascript can be embedded in HTML",
        options: [
            "a: True",
            "b: False"],
            
        }
        answer:  "a: Yes",

    {
        question: "Javascript cannot be used for which of these?",
        options: [
            "a: websites",
            "b: web servers",
            "c: reading and writing of files on client side"],
        }
        answer: "c: reading and writing of files on client side",


    {
        question: "Which of these is part of the Javascript library?",
        options: [
            "a: functions",
            "b: aces",
            "c: kings"],
        }
        answer: "b",
    
];

function checkAnswer() {

}

checkAnswer();


// Event listener
submitButton.addEventListener("click",)
    function startQuiz() {
        startContainer.style.visibility = "hidden"

    }
