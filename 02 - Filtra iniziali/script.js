/* Scrivi una funzione che accetti un'array di stringhe e una lettera e restituisca un array contenente solo le parole che iniziano con quella lettera */

const names = ["Anna", "Luca", "Marco", "Adele", "Laura", "Alessandra"];


// Dichiara la funzione qui.

function check(names, letter){
    let newArray = [];
    names.forEach(element => {
        if(element[0] == letter)
            newArray.push(element);
    });
    return newArray;
}

// Invoca la funzione qui e stampa il risultato in console

const newArray = check(names, "A");
console.log(newArray);

//Risultato atteso se si passa la lettera A: ["Anna", "Adele", "Alessandra"]