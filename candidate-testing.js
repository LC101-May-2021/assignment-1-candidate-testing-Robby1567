const input = require('readline-sync');

// TODO 2: modify your quiz app to ask 5 questions //
 
// TODO 1.1a: Define candidateName // 
let candidateName = "";
// TODO 1.2a: Define question, correctAnswer, and candidateAnswer //
let question = ("What is 1 + 1?: ");
let correctAnswer = 2;
let candidateAnswer = Number(question);
let questions = ["What is 1 + 1?: ", "What is 2 + 2?: ", "4 + 4?: ", "5 + 5?: ", "10 + 10?: "];
let correctAnswers = [2, 4, 8, 10, 20];
let candidateAnswers = ("");

 //for ( i = 0; i < 5; i++) {
  //  let candidateAnswers = Number`${input.question(questions[i])}`;
  //}

function askForName() {
  // TODO 1.1b: Ask for candidate's name //
 let candidateName = input.question("Please enter you name: ");
  console.log("Hello", candidateName);
}

function askQuestion() {
  // TODO 1.2b: Ask candidate the question and assign the response as candidateAnswer //
 for ( i = 0; i < 5; i++) {
    let candidateAnswers = Number`${input.question(questions[i])}`;
  }
}


function gradeQuiz(candidateAnswers) {
console.log(candidateAnswers[0]);
  // TODO 1.2c: Let the candidate know if they have answered the question correctly or incorrectly // 
  let numOfCorrect = 0
  for ( i = 0; i < 5; i++) {
    if (candidateAnswers[i] === correctAnswers[i]) {
      numOfCorrect + 1
      }
    }

  let grade = `You scored ${numOfCorrect} out of 5`;
  console.log(grade);
}

function runProgram() {
  // TODO 1.1c: Ask for candidate's name //
  askForName();
  //askQuestion();
  gradeQuiz(this.candidateAnswers);
}






// Don't write any code below this line //
// And don't change these or your program will not run as expected //
module.exports = {
  candidateName: candidateName,
  question: question,
  correctAnswer: correctAnswer,
  candidateAnswer: candidateAnswer,
  questions: questions,
  correctAnswers: correctAnswers,
  candidateAnswers: candidateAnswers,
  gradeQuiz: gradeQuiz,
  runProgram: runProgram
};