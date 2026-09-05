let timeInSeconds = 10 * 60; // 10 minutes in seconds
let timerElement = document.getElementById("timer");

function updateTimer() {
    let hours = Math.floor(timeInSeconds / 3600);
    let minutes = Math.floor((timeInSeconds % 3600) / 60);
    let seconds = timeInSeconds % 60;

    timerElement.textContent = `${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
    
    if(minutes <= 2 && seconds === 0){
        timerElement.style.color = "red";
    }
}

function checkAnswers() {
    let score = 0;
    let totalQuestions = 6;
    let answers = [1,2,3,4,1,2];
    let question4Answers = ["true","False","True","True"];
    let question6Answers = [1,3,4];
    

    // Check each question's answer

    if(totalQuestions <= 6){
        for(let i=1; i<=6; i++){
            let questionContainer = document.getElementById(`question${i}`);
            if(i === 4){ // choose question 4 and 6
                for(let j=1; j<=4; j++){
                    let boolValue = document.querySelector(`input[name="question4_answer${j}"]:checked`)?.value;
                    if(boolValue === question4Answers[j-1]){
                        score++;
                        questionContainer.style.background = "linear-gradient(to left, white,rgb(0, 255, 0))";
                    }
                    else{
                        questionContainer.style.background = "linear-gradient(to left, white,rgb(255, 2, 2))";
                    }
                    
                }
            }
            else if(i == 6){
                let question6Value = document.querySelectorAll(`input[name = "question6"]:checked`);
                if(question6Value.length === question6Answers.length && Array.from(question6Value).every(input => question6Answers.includes(parseInt(input.value)))){
                    score++;
                    questionContainer.style.background = "linear-gradient(to left, white,rgb(0, 255, 0))";
                }
                else{
                    questionContainer.style.background = "linear-gradient(to left, white,rgb(255, 2, 2))";
                }
            }
            else{
                let value = document.querySelector(`input[name="question${i}"]:checked`)?.value;
                if(value == answers[i-1]){
                    score++;
                    questionContainer.style.background = "linear-gradient(to left, white,rgb(0, 255, 0))";
                }
                else{
                    questionContainer.style.background = "linear-gradient(to left, white,rgb(255, 2, 2))";
                }
            }
            
        }
    }
    document.getElementById("marks").textContent = `Your score: ${score} out of ${totalQuestions}`;
    console.log(`Final score: ${score}`);
}
//updateTimer(); // Initial call to display the timer immediately

let timerInterval = setInterval(() => {
    if(timeInSeconds <= 0) {
        clearInterval(timerInterval);
        alert("Time's up! The test will be submitted automatically.");
    }
    else{
        timeInSeconds--;
    }
    
    updateTimer();
}, 1000);