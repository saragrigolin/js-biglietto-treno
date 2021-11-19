/* Calcolo del prezzo del biglietto del treno

Il programma dovrà chiedere all’utente il numero di chilometri che vuole percorrere e l’età del passeggero.
Sulla base di queste informazioni dovrà calcolare il prezzo totale del viaggio, secondo queste regole:
il prezzo del biglietto è definito in base ai km(0.21 € al km)
va applicato uno sconto del 20 % per i minorenni
va applicato uno sconto del 40 % per gli over 65.
L’output del prezzo finale va messo fuori in forma umana(con massimo due decimali, per indicare centesimi sul prezzo).Questo richiederà un minimo di ricerca. 

BONUS
Controllare se l'utente ha inserito i dati nel prompt*/

// Chiedo all'utente il numero di chilometri che vuole percorrere
let chilometri = prompt('Inserisci il numero di chilometri da percorrere');
console.log('Numero di chilometri da percorrere:', chilometri);

// Chiedo all'utente la sua età
let eta = prompt('Inserisci la tua età');
console.log('Età del passeggero:', eta);

// Sulla base di queste informazioni, calcolare il prezzo totale del viaggio 
// considerando che il costo del biglietto è definito in base ai chilometri, 0.21€ al chilometro
let costoKm = 0.21;
let prezzoBase =  parseFloat(chilometri) * costoKm;
console.log('prezzoBase:', prezzoBase);

// Prezzo finale per chi ha tra i 18 e 65 anni
let prezzoFinale = prezzoBase;

// Va applicato uno sconto del 20% per i minorenni, del 40% per gli over 65
if (parseInt(eta) < 18){
    prezzoFinale = (prezzoBase - ((prezzoBase * 20) / 100));
    console.log('prezzoFinale', prezzoFinale);
} else if (parseInt(eta) > 65) {
    prezzoFinale = (prezzoBase - ((prezzoBase * 40) / 100));
    console.log('prezzoFinale', prezzoFinale);
}

// L’output del prezzo finale va messo fuori in forma umana(con massimo due decimali, per indicare centesimi sul prezzo)
// Bonus: controllare se l'utente ha inserito dei dati nel prompt
if (chilometri.length = 0 || eta.length = 0 || chilometri == '0' || eta == '0') {
    document.getElementById('prezzofinale').innerHTML = 'Non hai inserito i chilometri o la tua età. Aggiorna la pagina e inserisci i dati corretti.';
} else {
    document.getElementById('prezzofinale').innerHTML = 'Il prezzo finale del biglietto è di ' + prezzoFinale.toFixed(2) + '€.';
}