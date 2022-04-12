
// BONUS 1
// Dato un container nel DOM, appendi un elemento html con il numero o la stringa corretta.
// Scrivi un programma che stampi in console i numeri da 1 a 100.
const fizzBox = document.querySelector('.container');
console.log(fizzBox);
for (let i = 1; i <= 100; i++) {
    //console.log(i, typeof(i));

// Per i multipli di 3 stampi “Fizz” al posto del numero e per i multipli di 5 stampi Buzz.
// Per i numeri che sono sia multipli di 3 che di 5 stampi FizzBuzz.
let fizzBuzz = i;

if (i % 3 === 0 && i % 5 === 0) {
    fizzBuzz = 'FizzBuzz';
    console.log(fizzBuzz);
    fizzBox.innerHTML += `<div class="box fizz-buzz">${fizzBuzz}</div>`;
} else if (i % 3 === 0) {
    fizzBuzz = 'Fizz';
    console.log(fizzBuzz);
    fizzBox.innerHTML += `<div class="box fizz">${fizzBuzz}</div>`;
} else if (i % 5 === 0) {
    fizzBuzz = 'Buzz';
    console.log(fizzBuzz);
    fizzBox.innerHTML += `<div class="box buzz">${fizzBuzz}</div>`;
} else {
    fizzBuzz = `${fizzBuzz}`;
    console.log(fizzBuzz);
    fizzBox.innerHTML += `<div class="box f-b">${fizzBuzz}</div>`;
}
}

