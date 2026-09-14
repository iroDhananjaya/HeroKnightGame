let timeInSeconds = 10 * 60; // 10 minutes in seconds
let timerElement = document.getElementById("timmer");
let isSubmitButtonPressed = false;
let timeOver = false;
let correctAnswers = ['a','d','b','c','a','c','c','d','d','a'];

function updateTimer() {
    let hours = Math.floor(timeInSeconds / 3600);
    let minutes = Math.floor((timeInSeconds % 3600) / 60);
    let seconds = timeInSeconds % 60;

    timerElement.textContent = `${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
    
    if(minutes <= 2 && seconds === 0){
        timerElement.style.color = "red";
    }
}

function CheckAnswers(){
    
    let score = 0;
    let totalMarks = 0;
    for(let i=1; i<=10; i++){
        let selectedAnswer = document.querySelector(`input[name="question${i}"]:checked`)?.value;
        let question = document.getElementById(`question${i}`);
        if(selectedAnswer == correctAnswers[i-1]){
            question.style.background = "linear-gradient(to left, white, rgb(0, 255, 0))";
            score+=10;
            totalMarks+=10;
        }
        else{
           question.style.background = "linear-gradient(to left, white, rgb(255, 2, 2))";
           totalMarks+=10;
           document.getElementById(`question${i}_correctAnswer`).textContent = `Correct Answer : ${correctAnswers[i-1]}`;
        }
    }
    document.getElementById("marks").textContent = score+"/"+totalMarks;
    isSubmitButtonPressed = true;
}

let timerInterval = setInterval(() => {
    if(timeInSeconds <= 0) {
        clearInterval(timerInterval);
        alert("Time's up! The test will be submitted automatically.");
        timeOver = true;
        checkAnswers();
        
    }
    else if(isSubmitButtonPressed){
        clearInterval(timerInterval);
    }
    else{
        timeInSeconds--;
        if(timeInSeconds < 120){
            document.getElementById("timmer").style.color = "red";
        }
    }
    
    updateTimer();
}, 1000);

function Reset(){
    window.location.reload();
}