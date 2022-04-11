// Scrivi un programma che stampi in console i numeri da 1 a 100.
for (let i = 1; i <= 100; i++) {
    //console.log(i, typeof(i));

// Per i multipli di 3 stampi “Fizz” al posto del numero e per i multipli di 5 stampi Buzz.
let fizzBuzz = i;

if (i % 3 === 0 && i % 5 === 0) {
    fizzBuzz = 'FizzBuzz';
    console.log(fizzBuzz);
} else if (i % 3 === 0) {
    fizzBuzz = 'Fizz';
    console.log(fizzBuzz);
} else if (i % 5 === 0) {
    fizzBuzz = 'Buzz';
    console.log(fizzBuzz);
} else {
    fizzBuzz = `${fizzBuzz}`;
    console.log(fizzBuzz);
}   

// Per i numeri che sono sia multipli di 3 che di 5 stampi FizzBuzz.


}