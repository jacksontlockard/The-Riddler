var riddle = "What do you call a 100-year-old ant?";
var riddleAnswer = "An antique";
var userAnswer = prompt(riddle);

if (riddleAnswer.toLowerCase() == userAnswer.toLowerCase()) {
  alert("You're right!");
} else {
  alert("You are wrong. Ha, ha! The correct answer is: " + riddleAnswer + "!");
}
