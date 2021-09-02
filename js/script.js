/*
A)

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

B)

    All'inizio il software richiede anche una difficoltà all'utente
    Cambia il range di numeri casuali: con difficoltà 0 => tra 1 e 100
    con difficoltà 1 => tra 1 e 80 con difficoltà 2 => tra 1 e 50
*/

// Creare un array che contenga i numeri casuali.
// Creare una funzione per generare un numero casuale indicato il valore massimo.
// Creare una funzione che aggiunge il valore all'array, ma non se è già prensete

// Creare un array per contenere i tentativi inseriti dall'utente
// Verificare che il numero inserito sia compreso tra 1 e 100 (inclusi)
// Non permettere l'inserimento dello stesso numero due volte, messaggio a schermo di avvertimento
// Se il numero è presente nella lista delle mine, la partita termina


let listaMine = [];
let totaleMine = 16;
let campo = 0;

// let numMines = parseInt(prompt("Inserisci il numero di Mine"));

// Scelta della difficoltà(totaleTentativi)
campo = selectDifficulty(difficulty());

// Creazione della griglia a schermo e creazione di un array contenente la posizione di ogni singola cella
let listaCampo = creazioneGriglia (campo);


// Creazione dell'array con un numero prestabilito di mine
listaMine = minaSetting(totaleMine, campo);

// Ordinamento dell'array
listaMine = ordinaArray(listaMine);

// for(let i = 0; i < listaCampo.length; i++)
// {
//     listaCampo[i].addEventListener('click', function(){
//         listaCampo[i].classList.add('bg-green');
//     });
// }
for(let i = 0; i < listaCampo.length; i++)
{
    listaCampo[i].addEventListener('click', function(){
        gameplay(listaMine, listaTentativi, listaCampo, campo, i);        
    });
}

console.log(listaMine);

let listaTentativi = [];

// do
//     {
//         let inputNum = parseInt(prompt ("Inserisci un numero compreso tra 1 e " + totCampo));
        
//         if (input100(inputNum,totCampo))
//         {
//             // if(arrMine.includes(inputNum))
//             if (verificaNumero(inputNum, arrMine))
//             {
//                 alert("Hai perso\nIl punteggio è : " + arrUtente.length);
//                 break;
//             // }else if (arrUtente.includes(inputNum))
//             }else if (verificaNumero(inputNum, arrUtente))
//             {
//                 alert("hai già inserito questo numero, prova con un altro");
//             }else
//             {            
//                 arrUtente.push(inputNum);
//             }
    
//         }
//         else
//         {
//             alert("HAI INSERITO UN VALORE NON VALIDO " + inputNum);
//         }
    
//     }while (arrUtente.length < totCampo - arrMine.length)
    
//     console.log(arrUtente);
    
//     // Condizione di vittoria
//     if (totCampo - arrMine.length == arrUtente.length)
//     {  
//         alert("HAI VINTO" + "\n" + "Il punteggio è : " + arrUtente.length);
//     }

// Funzione per il ciclo dell'inserimento valori dell'utente
function gameplay (arrMine, arrUtente, arrCampo, totCampo, scelta)
{
    let sceltaArr = scelta + 1;
    // let inputNum = parseInt(prompt ("Inserisci un numero compreso tra 1 e " + totCampo));
    if (verificaNumero(sceltaArr, arrMine))
    {
        alert("Hai perso\nIl punteggio è : " + arrUtente.length);
    }else if (verificaNumero(sceltaArr, arrUtente))
    {
        alert("hai già inserito questo numero, prova con un altro");
    }else
    {            
        arrUtente.push(sceltaArr);
        console.log(scelta);
        arrCampo[scelta].classList.add('bg-green');
    }
    
    
    console.log(arrUtente);
    
    // Condizione di vittoria
    if (totCampo - arrMine.length == arrUtente.length)
    {  
        alert("HAI VINTO" + "\n" + "Il punteggio è : " + arrUtente.length);
    }
}

// Funzione per generare un numero casuale compreso in un intervallo (min e max inclusi)
function genNum (max, min)
{
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

// Funzione per ordinare un array 
function ordinaArray (arr)
{
    return arr.sort(function(a, b){
        return a - b;
    })
}

// Funzione per creare un array, aggiungendo un numero compreso tra 1 e totCampo (mai un duplicato)
function minaSetting (mines, totCampo)
{
    let list = [];
    do
    {
        let num = genNum(totCampo,1);

        if (!list.includes(num))
        {
            list.push(num);
        }
    }while(list.length < mines)

    return list;    
}

// Funzione per verificare che l'input sia un numero compreso tra 1 e max inclusi
function input100 (num, max)
{
    if (num > 0 && num <= max && !(isNaN(num)))
    {
        return true;
    }
    else{
        return false;
    }
}

// Funzione per verificare la presenza di un numero all'interno di un array
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


// Funzione per far scegliere la difficoltà
function difficulty ()
{
    let input;
    do
    {
        input = parseInt (prompt ("Imposta la difficoltà\n0- Facile\n1- Medio\n2- Difficile"));
    }while (isNaN(input) || input < 0 || input > 2)

    return input;
}

// Funzione per impostare il numero di slot all'intenro dell'array
function selectDifficulty (num)
{
    switch (num)
    {
        case 0:
            num = 100;
            break;
        case 1:
            num = 80;
            break;
        case 2:
            num = 50;
            break;
        default:
            return -1;
    }
    return num;
}

// Funzione per la creazione della griglia sullo schermo

function creazioneGriglia (numCaselle)
{
    document.getElementById('campo-minato').innerHTML = "";

    for (let i = 0; i < numCaselle/10; i++)
    {
        document.getElementById('campo-minato').innerHTML += "<div class=\"container\"><div class=\"row riga\">";
    }

    let listaRighe = [];
    listaRighe = document.getElementsByClassName('riga');
    for (let j = 0; j < numCaselle/10; j++)
    {
        for(let k = 0; k < 10; k++)
        {
            listaRighe[j].innerHTML += "<div class=\"col casella bordo\"><span class=\"punto\"></span>";
        }           
    }

    let listaColonne = document.getElementsByClassName('punto');
    for (let i = 0; i < listaColonne.length; i++)
    {
        listaColonne[i].innerHTML = i+1;
    }
    
    return lista = document.getElementsByClassName('casella');
}