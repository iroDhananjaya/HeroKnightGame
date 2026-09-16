let CorerctAnswers = [ '2', '3', '2', '4', '3', '2', '4', '1', '2', '4' ];

console.log(CorerctAnswers);

document.getElementById('submit').onclick = function() {
    event.preventDefault();

    let answers = document.querySelectorAll('input[type="radio"]:checked');

    answers = Array.from(answers).map(answers => answers.value);

    let x=2;

    console.log(x);

};

