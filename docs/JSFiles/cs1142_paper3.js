let CorrectAnswers = "2,3,2,4,3,2,4,1,2,4".split(',');

console.log(CorrectAnswers);

document.getElementById('submit').onclick = function() {
    event.preventDefault();

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
            event.preventDefault();

            // Wrong Answer Highlight Red
            let radio = document.querySelector(`input[name="q${i+1}"][value="${answers[i]}"]`);
            

            if (radio) {
            radio.parentElement.style.backgroundColor = "red";
            radio.parentElement.style.border = "2px solid #30dfef"
            radio.style.accentColor = "blue";
            };

            // Correct Answer Highlight Green
            let radiocorrect = document.querySelector(`input[name="q${i+1}"][value="${CorrectAnswers[i]}"]`);


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

