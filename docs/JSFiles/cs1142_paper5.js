// _paper5.js

// 1. Set the correct answers here. "value" from your radio buttons
const correctAnswers = {
  question1: "1", // Q1 correct answer = value="1" -> Well documentation
  question2: "4", // Q2 correct answer = value="4" -> System is a collection...
  question3: "3", // Q3 correct answer = value="3" -> Feasibility study 
  question4: "3", // Q4 correct answer = value="3" -> System analysis
  question5: "1", // Q5 correct answer = value="1" -> System design
  question6: "1", // Q6 correct answer = value="1" -> System implementation
  question7: "3", // Q7 correct answer = value="3" -> System testing
  question8: "4", // Q8 correct answer = value="4" -> Environmental feasibility
  question9: "1", // Q9 correct answer = value="1" -> Observation
  question10: "4" // Q10 correct answer = value="4" -> System maintenance
};

let totalMarks = 0;
const totalQuestions = Object.keys(correctAnswers).length;

// 2. Run this when page loads
document.addEventListener('DOMContentLoaded', function() {
  
  // Add event listener to every radio button
  const allRadios = document.querySelectorAll('input[type="radio"]');
  
  allRadios.forEach(radio => {
    radio.addEventListener('change', checkAnswer);
  });
});

function checkAnswer(event) {
  const selectedRadio = event.target;
  const questionName = selectedRadio.name; // "question1"
  const selectedValue = selectedRadio.value; // "1", "2", "3", "4"
  
  const correctValue = correctAnswers[questionName];
  const markSpan = document.getElementById(questionName + "_Mark"); // question1_Mark
  
  let questionMark = 0;

  if (selectedValue === correctValue) {
    questionMark = 1; // Correct = 1 mark
    markSpan.style.color = "green";
  } else {
    questionMark = 0; // Wrong = 0 mark
    markSpan.style.color = "red";
  }
  
  markSpan.innerText = questionMark;
  
  // 3. Update total marks
  updateTotalMarks();
}

function updateTotalMarks() {
  totalMarks = 0;
  // Loop through all questions and add up the marks
  for (let q in correctAnswers) {
    const mark = parseInt(document.getElementById(q + "_Mark").innerText);
    totalMarks += mark;
  }
  
  document.getElementById("marks").innerText = `Marks : ${totalMarks}/${totalQuestions}`;
}
