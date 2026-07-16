const subscribe=document.getElementById('subscribe');
const visa=document.getElementById('visa');
const but=document.getElementById('submit');
const result=document.getElementById('result'); 

    but.onclick=function (){
    if (subscribe.checked) {
        result.textContent='You have subscribed to our newsletter.';
    } else {
        result.textContent='You have not subscribed to our newsletter.';
    }
    if (visa.checked) {
        result.textContent += ' You have a Visa card.';
    } else {
        result.textContent += ' You do not have a Visa card.';
    }
}