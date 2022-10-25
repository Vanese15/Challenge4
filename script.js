// GIVEN I am taking a code quiz
// WHEN I click the start button
// THEN a timer starts and I am presented with a question
// WHEN I answer a question
// THEN I am presented with another question
// WHEN I answer a question incorrectly
// THEN time is subtracted from the clock
// WHEN all questions are answered or the timer reaches 0
// THEN the game is over
// WHEN the game is over
// THEN I can save my initials and my score

let start = document.querySelector("#start");
let scores = document.querySelector("#scores");
let card = document.querySelector("#card");

// Function to create countdown timer
let timer = 60;

function countdown() {
  timer--;
  document.getElementById("seconds").innerHTML = String(timer);
  if (timer > 0) {
    setTimeout(countdown, 1000);
  }
}

setTimeout(countdown, 1000);

console.log(countdown);

// Quiz questions, options and correct answer
// const questionArray = [
//   {
//     question: "Javascript is known as what type of language?",
//     options: ["a: Coffee", "b: Cursive", "c: Scripting"],
//     answer: "c: Scripting",
//   },
//   {
//     question: "Javascript is known for development of?",
//     options: ["a: web pages", "b: coffee beans", "c: functions"],
//     answer: "a: web pages",
//   },
//   {
//     question: "True or False. Javascript can be embedded in HTML",
//     options: ["a: True", "b: False"],
//     answer: "a: True",
//   },
//   {
//     question: "Javascript cannot be used for which of these?",
//     options: [
//       "a: websites",
//       "b: web servers",
//       "c: reading and writing of files on client side",
//     ],
//     answer: "c: reading and writing of files on client side",
//   },
//   {
//     question: "Which of these is part of the Javascript library?",
//     options: ["a: functions", "b: aces", "c: kings"],
//     answer: "b",
//   },
// ];

// function checkAnswer() {}

// checkAnswer();

// // Event listener
// startButton.addEventListener("click", startQuiz);
