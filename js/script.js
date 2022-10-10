// Scrivi un programma che stampi in console i numeri da 1 a 100,
//  ma che per i multipli di 3 stampi “Fizz” al posto del numero e per i multipli di 5 stampi “Buzz”.
//  Per i numeri che sono sia multipli di 3 che di 5 stampi “FizzBuzz”.
let i = 0 
// let multipleOfThree =
// let multipleOfFive = 

for(i = 1; i <= 100; i++){
    if(i % 5 === 0 ){
        i = ("Buzz")
    }
    else if (i % 3 === 0 ){
        i = ("Fizz");
    }
    else if (i % 3 === 0 && i % 5 === 0 ){
        i = ("BuzzFizz");
    }
        console.log(i)
}