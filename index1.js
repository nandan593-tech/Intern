const emailInput = document.getElementById('lab');
const submitButton = document.getElementById('submit');
const resultHeading = document.getElementById('result');
 submitButton.onclick=function() {
    const email = emailInput.value;
    let em=email.indexOf('@');
    let ch=email.charAt(0);
    let re=email.repeat(2);
    resultHeading.textContent=`${em}`;
    resultHeading.textContent=`${ch}`;
    resultHeading.textContent=`${re}`;
 }