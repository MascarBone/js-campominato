// Creare un array per rappresentare le righe

let listaSchermo = [];
let ctot = 50;

for (let i = 0; i < ctot/10; i++)
{
    document.getElementById('campo-minato').innerHTML += "<div class=\"container\"><div class=\"row riga\">";
}

listaSchermo = document.getElementsByClassName('riga');

for (let j = 0; j < ctot/10; j++)
{
    for(let k = 0; k < 10; k++)
    {
        listaSchermo[j].innerHTML += "<div class=\"col bordo\"><span class=\"casella\"></span>";
    }   
    
}


// Creare un array per rappresentare ogni cella

let lista = document.getElementsByClassName('casella');

console.log(lista);

for (let i = 0; i < lista.length; i++)
{
    lista[i].innerHTML = i+1;
}