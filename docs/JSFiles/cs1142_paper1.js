

let timeInSeconds = 1 * 60; // 10 minutes in seconds
let timerElement = document.getElementById("timer");
let isSubmitButtonPressed = false;
let timeOver = false;

function updateTimer() {
    let hours = Math.floor(timeInSeconds / 3600);
    let minutes = Math.floor((timeInSeconds % 3600) / 60);
    let seconds = timeInSeconds % 60;

    timerElement.textContent = `${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
    
    if(minutes <= 2 && seconds === 0){
        timerElement.style.color = "red";
    }
}

function scrollToTop() {
  // Scrolls smoothly to the top left of the document
  window.scrollTo({
    top: 0,
    left: 0,
    behavior: 'smooth' 
  });
}

function checkAnswers() {
    // List all radio button group names that require selection
    const requiredRadioGroups = [
        'question1',
        'question2',
        'question3',
        'question4_answer1',
        'question4_answer2',
        'question4_answer3',
        'question4_answer4',
        'question5',
        'question7',
        'question9',
        'question10_answer1',
        'question10_answer2',
        'question10_answer3',
        'question10_answer4',
        'question12',
        'question13_answer1',
        'question13_answer2',
        'question13_answer3',
        'question13_answer4'
    ];

    if(!timeOver){
        for (const groupName of requiredRadioGroups) {
            const selected = document.querySelector(`input[name="${groupName}"]:checked`);
            if (!selected) {
                alert('Please answer all single-choice and True/False questions before submitting!');
                return; // Stop submission
            }
        }
    }
    

    let score = 0;
    let totalQuestions = 6;
    let answers = [2,1,3,4,3,6,3,8,3,10,11,3,13];// 4,6,8,10,11,13 number didn't check
    let question4Answers = ["true","false","false","false"];
    let question6Answers = [2,3];
    let question8Answers = [1,3,4];
    let question10Answers = ["true","false","false","false"];
    let question11Answers = [1,3];
    let question13Answers = ["false","true","true","false"];
    let marksAllowedForall = 27; // increase in loop
    
    

    // Check each question's answer

    isSubmitButtonPressed = true;
    if(totalQuestions <= 20){
        for(let i=1; i<=13; i++){
            let questionContainer = document.getElementById(`question${i}`);
            let CorrectAnswersCount = 0;
            
            if(i === 4){ // choose question 4
                for(let j=1; j<=4; j++){
                    let boolValue = document.querySelector(`input[name="question4_answer${j}"]:checked`)?.value;
                    if(boolValue !== null && boolValue === question4Answers[j-1]){
                        score++;
                        CorrectAnswersCount++;
                        if(CorrectAnswersCount === 4){
                            questionContainer.style.background = "linear-gradient(to left, white,rgb(0, 255, 0))";  
                        } 
                    }
                    else{
                        questionContainer.style.background = "linear-gradient(to left, white,rgb(255, 2, 2))";
                        document.getElementById("correctAnswer4").textContent = `Answer order: ${question4Answers}`
                    }    
                }
                document.getElementById("question4_Mark").textContent = CorrectAnswersCount;
            }
            else if(i === 6){
                
                let question6Value = Array.from(document.querySelectorAll(`input[name = "question6"]:checked`));
                let answerValues = question6Value.map(input => parseInt(input.value));
                let correctAnswerCount ;

                if(question6Value !== null && question6Value.length === question6Answers.length && Array.from(question6Value).every(input => question6Answers.includes(parseInt(input.value)))){
                    score+=4;
                    questionContainer.style.background = "linear-gradient(to left, white,rgb(0, 255, 0))";
                    correctAnswerCount = 4; // give mark as correct answer count
                }
                else{
                    questionContainer.style.background = "linear-gradient(to left, white,rgb(255, 2, 2))";
                    correctAnswerCount = answerValues.filter(val => question6Answers.includes(val)).length;
                    if(question6Value !== null && correctAnswerCount === 2){
                        score+=2;
                    }
                    else if (correctAnswerCount !== 0){
                        score++;
                    }
                    document.getElementById("correctAnswer6").textContent = `Correct Answers: ${question6Answers}`;
                }
                document.getElementById("question6_Mark").textContent = correctAnswerCount;

            }
            else if(i === 8){
                
                let question8Value = Array.from(document.querySelectorAll(`input[name = "question8"]:checked`));
                let answerValues = question8Value.map(input => parseInt(input.value));
                let correctAnswerCount ;

                if(question8Value.length === question8Answers.length && Array.from(question8Value).every(input => question8Answers.includes(parseInt(input.value)))){
                    score+=4;
                    questionContainer.style.background = "linear-gradient(to left, white,rgb(0, 255, 0))";
                    correctAnswerCount = 4; // give mark as correct answer count
                }
                else{
                    questionContainer.style.background = "linear-gradient(to left, white,rgb(255, 2, 2))";
                    correctAnswerCount = answerValues.filter(val => question8Answers.includes(val)).length;
                    if(correctAnswerCount === 2){
                        score+=2;
                    }
                    else if(correctAnswerCount !== 0){
                        score++;
                    }
                    document.getElementById("correctAnswer8").textContent = `Correct Answers: ${question8Answers}`;
                }
                document.getElementById("question8_Mark").textContent = correctAnswerCount;

            }

            else if(i === 10){ // choose question 10
                for(let j=1; j<=4; j++){
                    let boolValue = document.querySelector(`input[name="question10_answer${j}"]:checked`)?.value;
                    if(boolValue === question10Answers[j-1]){
                        score++;
                        CorrectAnswersCount++;
                        if(CorrectAnswersCount === 4){
                            questionContainer.style.background = "linear-gradient(to left, white,rgb(0, 255, 0))";  
                        } 
                    }
                    else{
                        questionContainer.style.background = "linear-gradient(to left, white,rgb(255, 2, 2))";
                        document.getElementById("correctAnswer10").textContent = `Correct Answers: ${question10Answers}`;
                    }    
                }
                document.getElementById("question10_Mark").textContent = CorrectAnswersCount;
            }
            else if(i === 11){
                
                let question11Value = Array.from(document.querySelectorAll(`input[name = "question11"]:checked`));
                let answerValues = question11Value.map(input => parseInt(input.value));
                let correctAnswerCount ;

                if(question11Value.length === question11Answers.length && Array.from(question11Value).every(input => question11Answers.includes(parseInt(input.value)))){
                    score+=4;
                    questionContainer.style.background = "linear-gradient(to left, white,rgb(0, 255, 0))";
                    correctAnswerCount = 4; // give mark as correct answer count
                }
                else{
                    questionContainer.style.background = "linear-gradient(to left, white,rgb(255, 2, 2))";
                    correctAnswerCount = answerValues.filter(val => question11Answers.includes(val)).length;
                    if(correctAnswerCount === 2){
                        score+=2;
                    }
                    else if(correctAnswerCount !== 0){
                        score++;
                    }
                    document.getElementById("correctAnswer11").textContent = `Correct Answers: ${question11Answers}`;
                }
                document.getElementById("question11_Mark").textContent = correctAnswerCount;

            }
            else if(i === 13){ // choose question 10
                for(let j=1; j<=4; j++){
                    let boolValue = document.querySelector(`input[name="question13_answer${j}"]:checked`)?.value;
                    if(boolValue === question13Answers[j-1]){
                        score++;
                        CorrectAnswersCount++;
                        if(CorrectAnswersCount === 4){
                            questionContainer.style.background = "linear-gradient(to left, white,rgb(0, 255, 0))";  
                        } 
                    }
                    else{
                        questionContainer.style.background = "linear-gradient(to left, white,rgb(255, 2, 2))";
                        document.getElementById("correctAnswer13").textContent = `Correct Answers: ${question13Answers}`;
                    }    
                }
                document.getElementById("question13_Mark").textContent = CorrectAnswersCount;
                marksAllowedForall+= 4;
            }
            else {
                let value = document.querySelector(`input[name="question${i}"]:checked`)?.value;
                
                let markElement = document.getElementById(`question${i}_Mark`);
                
                if (value == answers[i - 1]) {
                    score++;
                    if (markElement) markElement.textContent = 1;
                    questionContainer.style.background = "linear-gradient(to left, white, rgb(0, 255, 0))";
                } else {
                    console.log(answers[i - 1]);
                    document.getElementById(`correctAnswer${i}`).textContent = `Correct Answer is: ${answers[i-1]}`;
                    if (markElement) markElement.textContent = 0;
                    questionContainer.style.background = "linear-gradient(to left, white, rgb(255, 2, 2))";
                    
                }
                
            }
            
            
        }
    }
    // display total mark on web page
    document.getElementById("marks").textContent = `Your score: ${score} out of ${marksAllowedForall}`;
    
    console.log(`Final score: ${score}`);
    scrollToTop();
}
//updateTimer(); // Initial call to display the timer immediately

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
    }
    
    updateTimer();
}, 1000);

function resetTest(){
    window.location.reload();
}
