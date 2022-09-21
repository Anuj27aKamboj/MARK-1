var readlineSync = require("readline-sync");

var score = 0;

function welcome() {
  var userName = readlineSync.question("Please enter your name - ");

  console.log("Welcome " + userName);
  console.log("Let's Play this fun quiz ~~~ Do you know me ?? ");
  console.log();
  console.log("**You can either enter the option or type complete answer**");
  console.log();
}

var questions = [
  {
    question: "What is my full name ? ",
    answerA: "Anuj Kamboj",
    answerB: "Kamboj Anuj"
  },
  {
    question: "Where do I study ? ",
    answerA: "Lovely Professional University",
    answerB: "Chandigarh University"
  },
  {
    question: "What is my home town ? ",
    answerA: "Yamuna Nagar",
    answerB: "Jalandhar"
  },
  {
    question: "what is my Date of Birth ? ",
    answerA: "27/06/2000",
    answerB: "28/06/2000"
  },
  {
    question: "What is my Dog's name ? ",
    answerA: "Pluto",
    answerB: "Jupiter"
  },
  {
    question: "What is my Course Major? ",
    answerA: "Full-Stack Web Developer",
    answerB: "Data Analyst"
  },
  {
    question: "What is my hobby ? ",
    answerA: "Cooking",
    answerB: "Singing"

  },
  {
    question: "What is my stress-buster ? ",
    answerA: "Workout",
    answerB: "Dance"
  }
]

function play(quest, ansA, ansB) {
  console.log(quest);
  console.log("A:" + ansA + "\t" + "B:" + ansB);
  var userAnswer = readlineSync.question("Enter your answer: ");

  if ((userAnswer.toUpperCase() === ansA.toUpperCase()) || (userAnswer.toUpperCase() === "A")) {
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
    play(questions[i].question, questions[i].answerA, questions[i].answerB)
  }
}

function showScores() {
  console.log("Hurrah!! Your Final Score : " + score);
}

welcome();
game();
showScores();


