let timeInSeconds = 5 * 60; // 5 minutes in seconds
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
//updateTimer(); // Initial call to display the timer immediately

let timerInterval = setInterval(() => {
    timeInSeconds--;
    updateTimer();
}, 1000);