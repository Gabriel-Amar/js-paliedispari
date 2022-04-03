//scelta pari o dispari
let scelta = prompt("Scegli tra pari o dispari");
console.log(scelta)

//scelta numero 
let numeroScelto = parseInt(prompt("Scegli un numero compreso tra 1 e 5"));
console.log(numeroScelto);

//funzione che genera un numero random
function numeroRandom(min, max){
    let numero = Math.floor((Math.random() * max) + min)
    return numero;
}

let numeroGenerato = numeroRandom(1, 5);
console.log(numeroGenerato);

//somma a schermo dei due numeri
console.log(numeroGenerato + numeroScelto)

//funzione per definire se la somma è pari o dispari
function sommaParidispari(num1, num2){
    let sommaNumeri = num1 + num2
    if(sommaNumeri % 2 === 0){
        pari = true
        console.log(`La somma è ${sommaNumeri} ed è pari`)
    }else{
        pari = false
        console.log(`La somma è ${sommaNumeri} ed è dispari`)
    }
}

let definizione = sommaParidispari(numeroGenerato, numeroScelto);

if(pari === true && scelta === "pari"){
    document.writeln("L'utente ha vinto")
}else{
    document.writeln("Il computer ha vinto")
}