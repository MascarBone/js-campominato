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

// let numMines = parseInt(prompt("Inserisci il numero di Mine"));

// Creazione dell'array con un numero prestabilito di mine
mineField = minaSetting(5);

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
    let i = 0;
    do
    {
        let input = genNum(100,1);

        if (!list.includes(input))
        {
            list.push(input);
            i++;
        }
    }while(i < mines)

    return list;    
}
