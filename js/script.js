// Pari e Dispari
// L’utente sceglie pari o dispari e inserisce un numero da 1 a 5.
// Generiamo un numero random(sempre da 1 a 5) per il computer(usando una funzione).
// Sommiamo i due numeri
// Stabiliamo se la somma dei due numeri è pari o dispari(usando una funzione)
// Dichiariamo chi ha vinto.
// Consigli del giorno:
// 1. scriviamo sempre prima dei commenti in italiano per capire cosa vogliamo fare
// 2. proviamo ad immaginare le operazioni che,
// vogliamo far svolgere al nostro programma così come lo faremmo "a mano"


//1# creo var input prompt per utente
//2# mi creo la function generatrice random e la sostituisco alla var del pc
var choice = prompt ('Pari o Dispari? p/d');
var numeroUtente;
//generatore numero casuale per pc  tra 1 e 5;
var numeroPc = generatoreRandom(1, 5);
document.getElementById('pc').innerHTML += numeroPc;

//facciamo subito scegliere all'utente su cosa scommetere
if (choice == 'p') //se il numero è pari...
{
    alert('scommetti su pari')   
    document.getElementById('bet').innerHTML += ' PARI';    
} //altrimenti è dispari
else
{
    alert('scommetti su dispari')
    document.getElementById('bet').innerHTML += ' DISPARI';    

}

//Chiedo all'utente un numero che sia compreso tra 1 e 5
//chiedi quello nel do
do{
    numeroUtente = parseInt(prompt('Inserisci numero da 1 a 5'));
    console.log(numeroUtente);
}//fino a che non accade quello interno al while
while (numeroUtente > 5 || numeroUtente <= 0)
//---***stampo il suo numero sull'HTML
document.getElementById('utente').innerHTML += numeroUtente;
// end numeroUtente
var risultato = sommaNumeri(numeroUtente, numeroPc);
var message = 'è pari'
//Verifico la scommessa dell'utente se è pari
if(risultato%2 == 0)
{
    message = 'la somma è pari';
    if(choice == 'p'){
        alert ('hai vinto');
    }
    else {
        alert ('hai perso');
    }
}//verifica se è dispari
else{
    message = 'la somma è dispari';
    if (choice == 'p') {
        alert('hai perso');
    }
    else {
        alert('hai vinto');
    }
}
document.getElementById('somma').innerHTML += risultato;
console.log(sommaNumeri(numeroUtente, numeroPc));


// -----my function------
//function somma numeri
function sommaNumeri(n1, n2) {
    return n1 + n2;
}

//function generator
function generatoreRandom(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

//maggiore o minore
function maggiore(n1, n2) {
    if (n1 > n2) {
        return true;
    }
    return false;
}
