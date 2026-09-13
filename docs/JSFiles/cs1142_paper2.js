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


    window.scrollTo({top:0,behavior:'smooth'})
}
