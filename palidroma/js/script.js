let parola = prompt("Inserisci parola")

function giraparola(termine){
    let lettere = termine.split("");
    let parolagirata = [];
    for(let i = lettere.length - 1; i >= 0; i--){
        parolagirata += lettere[i];
    }
    return parolagirata
}
if(giraparola(parola) === parola){
    document.writeln(`la parola ${parola} è un palindromo`)
}else{
    document.writeln(`la parola ${parola} non è un palindromo`)
}

