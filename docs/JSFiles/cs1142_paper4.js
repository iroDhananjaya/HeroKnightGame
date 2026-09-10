let q1, q2, q3, q4, q5, q6, q7, q8, q9, q10, marks;
document.getElementById("submitBtn").onclick = function() {
    marks=0;
    q1=document.getElementById("1.3").checked;
    if(q1==true){
        marks=marks+1;
    }
    q2=document.getElementById("2.2").checked;
    if(q2==true){
        marks=marks+1;
    }
    q3=document.getElementById("3.4").checked;
    if(q3==true){
        marks=marks+1;
    }
    q4=document.getElementById("4.3").checked;
    if(q4==true){
        marks=marks+1;
    }
    q5=document.getElementById("5.3").checked;
    if(q5==true){
        marks=marks+1;
    }
    q6=document.getElementById("6.2").checked;
    if(q6==true){
        marks=marks+1;
    }
    q7=document.getElementById("7.4").checked;
    if(q7==true){
        marks=marks+1;
    }
    q8=document.getElementById("8.1").checked;
    if(q8==true){
        marks=marks+1;
    }
    q9=document.getElementById("9.2").checked;
    if(q9==true){
        marks=marks+1;
    }
    q10=document.getElementById("10.1").checked;
    if(q10==true){
        marks=marks+1;
    }

    if(marks==10){
        document.getElementById("h3").textContent="You have answered all questions correctly.";}
        else if(marks==1){
        document.getElementById("h3").textContent=marks + " question is correct out of 10 questions";}
        else{
        document.getElementById("h3").textContent=marks + " questions are correct out of 10 questions";}
    
}
document.getElementById("resetBtn").onclick = function() {
    document.getElementById("h3").textContent="";
}