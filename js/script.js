// Scrivi un programma che stampi in console i numeri da 1 a 100,
//  ma che per i multipli di 3 stampi “Fizz” al posto del numero e per i multipli di 5 stampi “Buzz”.
//  Per i numeri che sono sia multipli di 3 che di 5 stampi “FizzBuzz”.
let i = 0 
// let multipleOfThree =
// let multipleOfFive = 

for(i = 1; i <= 100; i++){
    let buzzFizz = ""
    if (i % 3 === 0 && i % 5 === 0 ){
        buzzFizz = "FizzBuzz"
    }
    else if(i % 5 === 0 ){
        buzzFizz = "Buzz"
    }
    else if (i % 3 === 0 ){
        buzzFizz = "Fizz"
    }
    else{
        buzzFizz = i;
    }
    // creare un elemeto all'interno del div .container che visualizzerà BuzzFizz
    // first way
    // let buzzFizzCard = `<div class="card">${buzzFizz}</div>`;
    // document.querySelector(".row").innerHTML += buzzFizzCard;
    // second way
    let buzzFizzCard = document.createElement("div");
    buzzFizzCard.classList.add("card");
    buzzFizzCard.innerHTML = buzzFizz;
    document.querySelector(".row").append(buzzFizzCard)
    console.log(buzzFizzCard)

    // milestone2  
    // if( buzzFizzCard.innerHTML === "FizzBuzz" ){
    //     buzzFizzCard.classList.add("buzzfizz-bg");
    // }  
    // else if(buzzFizzCard.innerHTML === "Buzz" ){
    //     buzzFizzCard.classList.add("buzz-bg");
    // }
    // else if (buzzFizzCard.innerHTML === "Fizz" ){
    //     buzzFizzCard.classList.add("fizz-bg");
    // }
    // else{
    //     buzzFizzCard.classList.add("no-buzzfizz-bg");
    // }
    // switch method
    switch(buzzFizzCard.innerHTML){
        case "FizzBuzz":
            buzzFizzCard.classList.add("buzzfizz-bg");
            break;
        case "Buzz":
            buzzFizzCard.classList.add("buzz-bg");
            break;
        case "Fizz":
            buzzFizzCard.classList.add("fizz-bg");
            break;
        default:
            buzzFizzCard.classList.add("no-buzzfizz-bg");
    }
}