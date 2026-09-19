// Wait for the HTML elements to load before attaching listeners
document.addEventListener("DOMContentLoaded", () => {
    const loginButton = document.getElementById("loginButton");
    const resetButton = document.getElementById("resetButton");
    const userNameInput = document.getElementById("userName");
    const passwordInput = document.getElementById("password");

    const userNames = ["dhananjaya", "sandaru", "hasantha", "dineth", "janith","guest","hansi"];
    const passwords = ["dhananjaya123", "sandaru123", "hasantha123", "dineth123", "janith123","guest","hansi123"];

    // Login Click Handler
    loginButton.addEventListener("click", () => {
        const enteredUser = userNameInput.value.trim().toLowerCase();;
        const enteredPass = passwordInput.value.trim();

        const userIndex = userNames.indexOf(enteredUser);

        if (userIndex !== -1 && passwords[userIndex] === enteredPass) {
            alert("Successfully Logged In");
            window.location.href = window.location.href='./HtmlFiles/mainPage.html';
        } else {
            alert("Login Unsuccessful");
        }
    });

    // Reset Click Handler
    resetButton.addEventListener("click", () => {
        userNameInput.value = "";
        passwordInput.value = "";
    });
});

