// exo1
console.log('__exo1__');
let myInputExo1 = document.querySelector('input')
myInputExo1.addEventListener('focus', () => {
    myInputExo1.style.backgroundColor = 'blue'
})

// exo2
console.log('__exo2__');
let myInputExo2 = document.getElementsByTagName('input')[1];
myInputExo2.addEventListener('focus', () => {
    myInputExo2.style.backgroundColor = 'blue'
})
myInputExo2.addEventListener('focusout', () => {
    myInputExo2.style = 'white'
})

// exo3
console.log('__exo3__');
let recupP1 = document.getElementsByClassName('premierParagraphe')[0]
let recupP2 = document.getElementsByClassName('secondParagraphe')[0]
let recupP3 = document.getElementsByClassName('dernierParagraphe')[0]
let recupButton = document.getElementsByClassName('buttonExo')[0]

recupButton.addEventListener('click', () => {
    recupP1.textContent = recupP2.textContent
    recupP3.textContent = recupP2.textContent
})

// exo4
console.log('__exo4__');

let myInputExo4 = document.querySelectorAll('input')[2]
let recupButtonExo4 = document.getElementsByClassName('buttonExo')[1]
let nameExo4 = document.querySelector('#exo4')

recupButtonExo4.addEventListener('click', () => {
    nameExo4.innerText = myInputExo4.value;
})

// exo5
console.log('__exo5__');

let btn3 = document.getElementsByClassName('btn')[2]
let img1 = document.getElementsByClassName('img-responsive')[0]
let exo5P = document.getElementsByTagName('p')[4].innerText;

btn3.addEventListener('click', () => {
    let indexPoint = exo5P.indexOf('.');
    console.log(indexPoint);
    let cheminExo5P = exo5P.substring(indexPoint);
    console.log(cheminExo5P);
    img1.src = cheminExo5P
})

// exo6
console.log('__exo6__');
let imgSecond = document.querySelectorAll('img')[1];
let imgthird = document.querySelectorAll('img')[2];

imgSecond.addEventListener('click', () => {
    let srcImage = imgSecond.getAttribute('src')
    imgthird.addEventListener('click', () => {
        imgthird.src = srcImage
    })
})

// exo7
console.log('__exo7__');
let exo7Button = document.querySelectorAll('button.btn')[3];
let exo7P1 = exo7Button.previousElementSibling;
let exo7P2 = exo7Button.nextElementSibling;
// variable temporaire
let exo7Temp;

exo7Button.addEventListener('click', () => {
    exo7Temp = exo7P1.innerText;
    exo7P1.innerText = exo7P2.innerText;
    exo7P2.innerText = exo7Temp;
})