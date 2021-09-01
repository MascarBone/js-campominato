/*
    Il computer deve generare 16 numeri casuali tra 1 e 100.
    I numeri non possono essere duplicati.

    In seguito deve chiedere all’utente (100 - 16) volte di inserire un numero alla volta,
    sempre compreso tra 1 e 100.
    L’utente non può inserire più volte lo stesso numero.
    Se il numero è presente nella lista dei numeri generati, la partita termina,
    altrimenti si continua chiedendo all’utente un altro numero.

    La partita termina quando il giocatore inserisce un numero “vietato”
    o raggiunge il numero massimo possibile di numeri consentiti.
    Al termine della partita il software deve comunicare il punteggio,
    cioè il numero di volte che l’utente ha inserito un numero consentito.
*/

// Creare un array che contenga i numeri casuali.
// Creare una funzione per generare un numero casuale indicato il valore massimo.
// Creare una funzione che aggiunge il valore all'array, ma non se è già prensete


let mineField = [];
let totaleMine = 4;
let totaleTentativi = 10;

// let numMines = parseInt(prompt("Inserisci il numero di Mine"));

// Creazione dell'array con un numero prestabilito di mine
mineField = minaSetting(totaleMine);

// Ordinamento dell'array
mineField.sort(function(a, b) {
    return a - b;
});

console.log(mineField);

// Funzione per generare un numero casuale compreso in un intervallo (min e max inclusi)
function genNum (max, min)
{
    return Math.floor(Math.random() * (max - min + 1)) +1;
}

// Funzione per creare un array, aggiungendo un numero compreso tra 1 e 100 (mai un duplicato)
function minaSetting (mines)
{
    let list = [];
    do
    {
        let num = genNum(100,1);

        if (!list.includes(num))
        {
            list.push(num);
        }
    }while(list.length < mines)

    return list;    
}




// Creare un array per contenere i tentativi inseriti dall'utente
// Verificare che il numero inserito sia compreso tra 1 e 100 (inclusi)
// Non permettere l'inserimento dello stesso numero due volte, messaggio a schermo di avvertimento
// Se il numero è presente nella lista delle mine, la partita termina

let tries = [];

do
{
    let inputNum = parseInt(prompt ("Inserisci un numero compreso tra 1 e 100"));
    if (input100(inputNum))
    {
        // if(mineField.includes(inputNum))
        if (verificaNumero(inputNum, mineField))
        {
            alert("Hai perso");
            break;
        // }else if (tries.includes(inputNum))
        }else if (verificaNumero(inputNum, tries))
        {
            alert("hai già inserito questo numero, prova con un altro");
        }else
        {            
            tries.push(inputNum);
        }

    }
    else
    {
        alert("HAI INSERITO UN VALORE NON VALIDO " + inputNum);
    }

}while (tries.length < totaleTentativi - mineField.length)

console.log(tries);

// Condizione di vittoria
if (totaleTentativi - mineField.length == tries.length)
{  
    alert("HAI VINTO" + "\n" + "Il numero di tentativi effettuati è : " + tries.length);
}


function input100 (num)
{
    if (num > 0 && num <= 100 && !(isNaN(num)))
    {
        return true;
    }
    else{
        return false;
    }
}

function verificaNumero (num, lista)
{
    for (let i = 0; i < lista.length; i++)
    {
        if (lista[i] === num)
        {
            return true;
        }
    }
    return false;
}