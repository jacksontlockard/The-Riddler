var riddles = ["What do you call a 100-year-old ant?", "What goes up when the rain comes down?", "I have a head and a tail but no body... What am I?"];
var riddleAnswers = ["An antique", "An umbrella", "A coin"];

function clicked() {
  var userAnswer = prompt(riddles[0]);

  if (riddleAnswers[0].toLowerCase() == userAnswer.toLowerCase()) {
    correct();
  } else {
    incorrect(riddleAnswers[0]);
  }
}

function correct() {
  alert("You're right!");
}

function incorrect(answer) {
  alert("You are wrong. Ha, ha! The correct answer is: " + answer + "!");
}
