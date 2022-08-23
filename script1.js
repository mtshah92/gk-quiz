// var batman = {
//   name: "Batman",
//   costumeColor: "black",
//   power: 1000,
//   stealth: 0,
// };

// var superman = {
//   name: "Superman",
//   costumeColor: "blue",
//   power: 100,
//   stealth: 10,
// };

// var superHeroes = [batman, superman];
// // console.log(superHeroes);

// for (var i = 0; i < superHeroes.length; i++) {
//   var currentHeroes = superHeroes[i];
//   //   console.log(currentHeroes);
//   console.log(currentHeroes.name);
//   console.log(currentHeroes.costumeColor);
//   console.log("--------");
// }

// -------->
// ex13: put a list of questions together

// var questionOne = {
//   question: "Who is my favourite superhero?",
//   answer: "Flash",
// };

// var questionTwo = {
//   question: "Which is my favourite song?",
//   answer: "Hare Ram",
// };

// var qnaList = [questionOne, questionTwo];

// for (var i = 0; i < qnaList.length; i++) {
//   var currentList = qnaList[i];
//   console.log(currentList.question);
// }

// ----------------->
// ex14: club everything to make the game

// ex15: print the final score to the user

// var userAnswer = prompt("What's your name?");
// var score = 0;

// console.log(`Hi ${userAnswer} Do you Know Meet Shah?`);

// function play(question, answer) {
//   if (question === answer) {
//     console.log("Correct!");
//     score = score + 1;
//   } else {
//     console.log("Incorrect!");
//   }
//   console.log(score);
// }

// var questionList = [
//   {
//     question: "Where do I live?",
//     answer: "Himatnagar",
//   },
//   {
//     question: "Where do I work?",
//     answer: "Wipro",
//   },
// ];

// for (var i = 0; i < questionList.length; i++) {
//   var currentQuestion = questionList[i];
//   var userans = prompt(currentQuestion.question);
//   play(userans, currentQuestion.answer);
// }

// console.log("Yay Your Final Score is ", score);

// challenge #1 mark one

var userName = prompt("Enter Your Name");

console.log(`Hi ${userName}! , Welcome to the Quiz`);

var score = 0;

function play(question, answer) {
  if (question === answer) {
    console.log("You are correct!");
    score = score + 1;
  } else {
    console.log("Incorrect !!");
  }
  console.log("Current Score: ", score);
}

var question = [
  {
    question: "Mount Everest is located in ?",
    options: ["a.India", "b.Nepal", "c.Tibet", "d.China"],
    answer: "b",
  },
  {
    question: "The Gate way of India is in?",
    options: ["a. Chennai", "b. Mumbai", "c. Kolkata", "d. New Delhi"],
    answer: "b",
  },
  {
    question: "Which is considered as the biggest port of India ?",
    options: ["a. Kolkata", "b. Cochin", "c. Chennai", "d. Mumbai"],
    answer: "d",
  },

  {
    question: " Pink city in India is ?",
    options: ["a. Mysore", "b. Karnataka", "c.  Hyderabad", "d.Jaipur"],
    answer: "d",
  },

  {
    question: " The largest fresh water lake in India is ?",
    options: [
      "a. Pulicat Lake",
      "b. Veeranam Lake",
      "c.  Chilka Lake",
      "d. Kolleru Lake",
    ],
    answer: "d",
  },
];

for (var i = 0; i < question.length; i++) {
  var currentQuestion = question[i];
  console.log(i + 1, ".", currentQuestion.question);

  for (var j = 0; j < currentQuestion.options.length; j++) {
    console.log(currentQuestion.options[j]);
  }
  var userAnswer = prompt("Enter the correct option no. ");
  play(currentQuestion.answer, userAnswer);
}

console.log("Your final score is ", score);
