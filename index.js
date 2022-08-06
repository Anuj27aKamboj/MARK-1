var readlineSync = require("readline-sync");

var score = 0;

function welcome() {
  var userName = readlineSync.question("Please enter your name - ");

  console.log("Welcome " + userName);
  console.log("Let's Play this fun quiz ~~~ How Much You Know Anuj");
  console.log();
}

var questions = [
  {
    question: "What is my full name ? ",
    answer: "Anuj Kamboj"
  },
  {
    question: "Where do I study ? ",
    answer: "Lovely Professional University"
  },
  {
    question: "What is my home town ? ",
    answer: "Yamuna Nagar"
  },
  {
    question: "what is my Date of Birth ? ",
    answer: "27/06/2000"
  },
  {
    question: "What is my Dog's name ? ",
    answer: "PLUTO"
  }
]

function play(quest, ans) {
  var userAnswer = readlineSync.question(quest);

  if (userAnswer.toUpperCase() === ans.toUpperCase()) {
    console.log("Yay!! Right answer ");
    console.log("/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/");
    score++;
  }
  else {
    console.log("Sorry!! Wrong answer ");
    console.log("/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/");
  }
}

function game() {
  for (var i = 0; i < questions.length; i++) {
    play(questions[i].question, questions[i].answer)
  }
}

function showScores() {
  console.log("Hurrah!! Your Final Score : " + score);
}

welcome();
game();
showScores();


