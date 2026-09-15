let submitButton = document.getElementById("submit_button");
let form = document.getElementById("form");

form.addEventListener("submit", function (event){
    if(form.checkValidity()){
        Hide();
    }
    else{
        form.reportValidity();
    }
});

function Hide(){
    submitButton.style.display = "none";
}