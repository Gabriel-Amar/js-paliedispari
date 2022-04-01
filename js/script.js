let parola = prompt("Inserisci parola")

function giraparola(parola){
    let lettere = parola.split("");
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

