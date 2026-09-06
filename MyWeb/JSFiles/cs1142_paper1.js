let timeInSeconds = 1 * 60; // 10 minutes in seconds
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
    let question4Answers = ["true","false","true","true"];
    let question6Answers = [1,3,4];
    let marksAllowed = 12;
    

    // Check each question's answer

    if(totalQuestions <= 6){
        for(let i=1; i<=6; i++){
            let questionContainer = document.getElementById(`question${i}`);
            let CorrectAnswersCount = 0;
            
            if(i === 4){ // choose question 4
                for(let j=1; j<=4; j++){
                    let boolValue = document.querySelector(`input[name="question4_answer${j}"]:checked`)?.value;
                    if(boolValue === question4Answers[j-1]){
                        score++;
                        CorrectAnswersCount++;
                        if(CorrectAnswersCount === 4){
                            questionContainer.style.background = "linear-gradient(to left, white,rgb(0, 255, 0))";  
                        } 
                    }
                    else{
                        questionContainer.style.background = "linear-gradient(to left, white,rgb(255, 2, 2))";
                    }    
                }
                document.getElementById("question4_Mark").textContent = CorrectAnswersCount;
            }
            else if(i == 6){
                
                let question6Value = document.querySelectorAll(`input[name = "question6"]:checked`);
                let correctAnswerCount = 0;
                if(question6Value.length === question6Answers.length && Array.from(question6Value).every(input => question6Answers.includes(parseInt(input.value)))){
                    score+=4;
                    questionContainer.style.background = "linear-gradient(to left, white,rgb(0, 255, 0))";
                    correctAnswerCount = 4; // give mark as correct answer count
                }
                else{
                    questionContainer.style.background = "linear-gradient(to left, white,rgb(255, 2, 2))";
                    correctAnswerCount = question6Value.filter(ans => question6Answers.includes(ans)).length;
                    if(correctAnswerCount === 2){
                        score+=2;
                    }
                    else{
                        score++;
                    }
                    
                }
                document.getElementById("question6_Mark").textContent = correctAnswerCount;

            }
            else{
                let value = document.querySelector(`input[name="question${i}"]:checked`)?.value;
                if(value == answers[i-1]){
                    score++;
                    if(document.querySelector(`input[name="question1"]:checked`)?.value == answers[i-1]){
                        document.getElementById("question1_Mark").textContent = 1;
                    }
                    else if(document.querySelector(`input[name="question2"]:checked`)?.value == answers[i-1]){
                        document.getElementById("question2_Mark").textContent = 1;
                    }
                    else if(document.querySelector(`input[name="question3"]:checked`)?.value == answers[i-1]){
                        document.getElementById("question3_Mark").textContent = 1;
                    }
                    
                    else if(document.querySelector(`input[name="question5"]:checked`)?.value == answers[i-1]){
                        document.getElementById("question5_Mark").textContent = 1;
                    }
                    else if(document.querySelector(`input[name="question6"]:checked`)?.value == answers[i-1]){
                        document.getElementById("question6_Mark").textContent = 4;
                    }

                    console.log("run ");
                    questionContainer.style.background = "linear-gradient(to left, white,rgb(0, 255, 0))";
                }
                else{
                    questionContainer.style.background = "linear-gradient(to left, white,rgb(255, 2, 2))";
                }
            }
            
        }
    }
    // display total mark on web page
    document.getElementById("marks").textContent = `Your score: ${score} out of ${marksAllowed}`;
    console.log(marksAllowed);
    console.log(`Final score: ${score}`);
}
//updateTimer(); // Initial call to display the timer immediately

let timerInterval = setInterval(() => {
    if(timeInSeconds <= 0) {
        clearInterval(timerInterval);
        alert("Time's up! The test will be submitted automatically.");
        checkAnswers();
    }
    else{
        timeInSeconds--;
    }
    
    updateTimer();
}, 1000);