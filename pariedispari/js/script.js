let scelta = prompt("Scegli tra pari o dispari");
console.log(scelta)

let numeroScelto = parseInt(prompt("Scegli un numero compreso tra 1 e 5"));
console.log(numeroScelto);

function numeroRandom(min, max){
    let numero = Math.floor((Math.random() * max) + min)
    return numero;
}

let numeroGenerato = numeroRandom(1, 5);
console.log(numeroGenerato);

function sommaParidispari(num1, num2){
    let sommaNumeri = num1 + num2
    if(sommaNumeri % 2 === 0){
        console.log(`La somma è ${sommaNumeri} ed è pari`)
    }else{
        console.log(`La somma è ${sommaNumeri} ed è dispari`)
    }
}

let definizione = sommaParidispari(numeroGenerato, numeroScelto);
