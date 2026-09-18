let CorrectAnswers = "2,3,2,4,3,2,4,1,2,4".split(',');

console.log(CorrectAnswers);


//Button Click function
function clickSubmit() {

    // Freeze the Radio Buttons After the Submit
    document.querySelectorAll(`input[type="radio"]`).forEach(radio => {
        radio.disabled =true;
    });

    // Answers Get to Array
    let answers = [];
    for (let i=0; i<CorrectAnswers.length; i++) {
        
        let checkInput = document.querySelector(`input[name="q${i+1}"]:checked`);
        
        if (checkInput) {
            answers.push(checkInput.value);
        } else {
            answers.push(null);
        }
    }

    console.log(answers);

    //Alert
    /* if (answers.length < CorrectAnswers.length) {
        alert("සියලුම ප්‍රශ්න වලට උත්තර දෙන්න!");
        return;
    }; */

    // Check Answers
    let total = 0;
    for (i = 0; i < CorrectAnswers.length; i++) {
        if (answers[i] == CorrectAnswers[i]) {
            total += 1;
        } else {

            // Wrong Answer Highlight Red
            const radio = document.querySelector(`input[name="q${i+1}"][value="${answers[i]}"]`);
            

            if (radio) {
            radio.parentElement.style.backgroundColor = "red";
            radio.parentElement.style.border = "2px solid #30dfef"
            radio.style.accentColor = "blue";
            };

            // Correct Answer Highlight Green
            const radiocorrect = document.querySelector(`input[name="q${i+1}"][value="${CorrectAnswers[i]}"]`);


            if (radiocorrect) {
            radiocorrect.parentElement.style.backgroundColor = "#35F527";
            radiocorrect.style.accentColor = "blue";
            }

        }
    };  
    console.log(total);

    document.getElementById("mark").innerHTML = total;
    document.getElementById("markbox").style.display = "flex";

    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });


};

document.getElementById('submit').onclick = clickSubmit;
// End of Button Click Event


 // Time Count down
function startTimer() {

    document.getElementById('timebox').style.display = "flex";
    document.getElementById('container').style.display = "flex";
    document.getElementById('start').style.display = "none";
    document.getElementById('Min10').style.display = "none";
    document.getElementById('time').style.height = "5%";

    let timeInSeconds = 600;

    const timerElement = document.getElementById('time');

    function updateTimer() {     
        var minute = Math.floor(timeInSeconds/60);
        var seconds = timeInSeconds % 60;

        if (seconds < 10) {
            seconds = "0" + seconds;
        }
        if (minute <10 ) {
            minute = "0" + minute;
        }

        timerElement.innerHTML = minute + ":" + seconds;

        if (timeInSeconds == 0) {
            clearInterval(countdown);
            timerElement.innerHTML = "Time Up!";
            clickSubmit(); 

        }

        timeInSeconds--;
    }

    updateTimer();

    var countdown = setInterval(updateTimer,1000 );
}

document.getElementById('start').onclick = startTimer;