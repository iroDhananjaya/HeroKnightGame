AOS.init({ duration:1200,});

function checkAnswers(e) {
    e.preventDefault();

    let q1 = document.getElementsByName('q1');
    if (q1[0].checked) document.getElementsByClassName('ans1')[0].style.color = 'red';
    if (q1[1].checked) document.getElementsByClassName('ans2')[0].style.color = 'red';
    if (q1[3].checked) document.getElementsByClassName('ans4')[0].style.color = 'red';

    document.getElementsByClassName('ans3')[0].style.color = 'green';

  
    let q2 = document.getElementsByName('q2');
    if (q2[0].checked) document.getElementsByClassName('ans1')[1].style.color = 'red';
    if (q2[2].checked) document.getElementsByClassName('ans3')[1].style.color = 'red';
    if (q2[3].checked) document.getElementsByClassName('ans4')[1].style.color = 'red';

    document.getElementsByClassName('ans2')[1].style.color = 'green';
    

    let q3 = document.getElementsByName('q3');
    if (q3[0].checked) document.getElementsByClassName('ans1')[2].style.color = 'red';
    if (q3[2].checked) document.getElementsByClassName('ans3')[2].style.color = 'red';
    if (q3[3].checked) document.getElementsByClassName('ans4')[2].style.color = 'red';

    document.getElementsByClassName('ans2')[2].style.color = 'green';

    let q4 = document.getElementsByName('q4');
    if (q4[0].checked) document.getElementsByClassName('ans1')[3].style.color = 'red';
    if (q4[2].checked) document.getElementsByClassName('ans3')[3].style.color = 'red';
    if (q4[3].checked) document.getElementsByClassName('ans4')[3].style.color = 'red';

    document.getElementsByClassName('ans2')[3].style.color = 'green';

    let q5 = document.getElementsByName('q5');
    if (q5[0].checked) document.getElementsByClassName('ans1')[4].style.color = 'red';
    if (q5[1].checked) document.getElementsByClassName('ans2')[4].style.color = 'red';
    if (q5[3].checked) document.getElementsByClassName('ans4')[4].style.color = 'red';

    document.getElementsByClassName('ans3')[4].style.color = 'green';

    let q6 = document.getElementsByName('q6');
    if (q6[0].checked) document.getElementsByClassName('ans1')[5].style.color = 'red';
    if (q6[2].checked) document.getElementsByClassName('ans3')[5].style.color = 'red';
    if (q6[3].checked) document.getElementsByClassName('ans4')[5].style.color = 'red';

    document.getElementsByClassName('ans2')[5].style.color = 'green';

    let q7 = document.getElementsByName('q7');
    if (q7[1].checked) document.getElementsByClassName('ans2')[6].style.color = 'red';
    if (q7[2].checked) document.getElementsByClassName('ans3')[6].style.color = 'red';
    if (q7[3].checked) document.getElementsByClassName('ans4')[6].style.color = 'red';

    document.getElementsByClassName('ans1')[6].style.color = 'green';

    let q8 = document.getElementsByName('q8');
    if (q8[1].checked) document.getElementsByClassName('ans2')[7].style.color = 'red';
    if (q8[2].checked) document.getElementsByClassName('ans3')[7].style.color = 'red';
    if (q8[3].checked) document.getElementsByClassName('ans4')[7].style.color = 'red';

    document.getElementsByClassName('ans1')[7].style.color = 'green';

    let q9 = document.getElementsByName('q9');
    if (q9[0].checked) document.getElementsByClassName('ans1')[8].style.color = 'red';
    if (q9[1].checked) document.getElementsByClassName('ans2')[8].style.color = 'red';
    if (q9[3].checked) document.getElementsByClassName('ans4')[8].style.color = 'red';

    document.getElementsByClassName('ans3')[8].style.color = 'green';

    let q10 = document.getElementsByName('q10');
    if (q10[0].checked) document.getElementsByClassName('ans1')[9].style.color = 'red';
    if (q10[1].checked) document.getElementsByClassName('ans2')[9].style.color = 'red';
    if (q10[3].checked) document.getElementsByClassName('ans3')[9].style.color = 'red';

    document.getElementsByClassName('ans4')[9].style.color = 'green';

     let m1,m2,m3,m4,m5,m6,m7,m8,m9,m10; 

    if(q1[2].checked){
        m1=1;
    }else{
        m1=0;
    }

    if(q2[1].checked){
        m2=1;
    }else{
        m2=0;
    }

    if(q3[1].checked){
        m3=1;
    }else{
        m3=0;
    }

    if(q4[1].checked){
        m4=1;
    }else{
        m4=0;
    }

    if(q5[2].checked){
        m5=1;
    }else{
        m5=0;
    }

    if(q6[1].checked){
        m6=1;
    }else{
        m6=0;
    }
    
    if(q7[0].checked){
        m7=1;
    }else{
        m7=0;
    }

    if(q8[0].checked){
        m8=1;
    }else{
        m8=0;
    }

    if(q9[2].checked){
        m9=1;
    }else{
        m9=0;
    }

    if(q10[2].checked){
        m10=1;
    }else{
        m10=0;
    }

    const finalMarks=m1+m2+m3+m4+m5+m6+m7+m8+m9+m10;
    const heading3=document.getElementById("heading3");
    heading3.innerText=`You Have Obtained ${finalMarks*10}% Out of 100%`;

    heading3.style.fontSize="24px";
    heading3.style.width="80%";
    heading3.style.margin="0 auto";
    heading3.style.padding="10px 20px";
    heading3.style.borderRadius="8px";

    document.getElementById("hline").style.display="none";

    if (finalMarks>=50){
        heading3.style.backgroundColor="green";
    }else{
        heading3.style.backgroundColor="red";  
    }

    window.scrollTo({top:0,behavior:'smooth'})
}
