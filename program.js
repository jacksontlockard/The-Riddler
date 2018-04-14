const riddle = "What do you call a 100-year-old ant?";
const riddleAnswer = "An antique";

function clicked() {
  var userAnswer = prompt(riddle);

  if (riddleAnswer.toLowerCase() == userAnswer.toLowerCase()) {
    correct();
  } else {
    incorrect(riddleAnswer);
  }
}

function correct() {
  alert("You're right!");
}

function incorrect(answer) {
  alert("You are wrong. Ha, ha! The correct answer is: " + answer + "!");
}
