const red = document.querySelector('#red');
const greens = document.querySelectorAll('.green');
const blues = document.querySelectorAll('p');

red.style.color = 'red';

greens.forEach((green) => {
    green.style.color = 'green';
});

blues.forEach((blue) => {
    blue.style.color = 'blue';
});