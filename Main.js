let annualContent = document.querySelector('.block');
let monthlyContent = document.querySelector('.none');
let annually = document.querySelector('.anotherSpan1');
let monthly = document.querySelector('.anotherSpan2');


annually.addEventListener('click', function(){
    annualContent.style.display = 'block';
    annually.style.backgroundColor = 'white';
    monthlyContent.style.display = 'none';
    monthly.style.backgroundColor = 'transparent';
})
monthly.addEventListener('click', function(){
    monthlyContent.style.display = 'block';
    monthly.style.backgroundColor = 'white';
    annualContent.style.display = 'none';
    annually.style.backgroundColor = 'transparent';
})