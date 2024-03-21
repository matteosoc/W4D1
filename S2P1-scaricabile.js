//ESERCIZI SUGLI IF: 

/* ESERCIZIO 1
 Scrivi un algoritmo per trovare il più grande tra due numeri interi.
*/

/* 
const x = prompt("Inserisci un numero:");
const y = 7;

if (x > y) {
  console.log(x + " è maggiore di 7")
} 

if (x < y) {
  console.log(x + " è minore di 7")
}

if (x === y) {
  console.log(x + " è uguale a 7")
}
*/

/*
ESERCIZIO 2
  Crea un blocco condizionale if/else per mostrare in console il messaggio corretto in ogni condizione.

  num < 5 - mostra in console "Tiny"
  num < 10 - mostra in console "Small"
  num < 15 - mostra in console "Medium"
  num < 20 - mostra in console "Large"
  num >= 20 - mostra in console "Huge"
*/

/* 
if (x - y >= 20) {
  console.log("Huge")
} else {
  if (x - y < 5) {
    console.log("Tiny")
  }
  if (x - y < 10) {
    console.log("Small")
  }
  if (x - y < 15) {
    console.log("Medium")
  }
  if (x - y < 20) {
    console.log("Large")
  }
}
*/

//ESERCIZI SUI CICLI: 

/* ESERCIZIO 3
  Mostra i numeri da 0 a 10 (incluso) in ordine ascendente, ma evitando di mostrare i numeri 3 e 8 (suggerimento: ripassa l'uso di "continue").
*/

/*
for (let i = 0; i < 11; i++) {
  if ((i === 3) || (i ===8)) {
    continue;
}
  console.log(i)
}
*/

/* ESERCIZIO 11
  Scrivi un ciclo in JavaScript per iterare da 0 a 15. Per ciascun elemento, il ciclo deve controllare the il valore corrente sia pari o dispari, e mostrare il risultato in console.
*/

/*
for (i = 0; i < 16;i++) {
  if (Number.isInteger(i / 2)) { 
      console.log (i + " è pari")
  } else {
    console.log (i + " è dispari")
  }
}
*/

//ESERCIZI EXTRA NON OBBLIGATORI

/* ESERCIZIO EXTRA 1
  Scrivi un algoritmo per verificare che, dati due numeri interi, il valore di uno di essi sia 8 oppure se la loro addizione/sottrazione sia uguale a 8.
*/

/*
let i = parseInt(prompt("Inserisci un numero"))
let n = parseInt(prompt("Inserisci un altro numero"))

if ((i===8) || (n===8)) {
  console.log("Almeno uno dei due numeri inseriti è 8")
} 

if (i + n === 8) {
  console.log("La somma di " + i + " e " + n + " fa 8")
}

if (i - n === 8) {
  console.log("La sottrazione di " + i + " e " + n + " fa 8")
}
*/

/* ESERCIZIO EXTRA 2
Stai lavorando su un sito di e-commerce. Stai salvando il saldo totale del carrello dell'utente in una variabile "totalShoppingCart".
C'è una promozione in corso: se il totale del carrello supera 50, l'utente ha diritto alla spedizione gratuita (altrimenti la spedizione ha un costo fisso pari a 10).
Crea un algoritmo che determini l'ammontare totale che deve essere addebitato all'utente per il checkout.
*/

/*
let totalShoppingCart = parseFloat(prompt("Inserisci il totale della spesa per calcolare il costo della spedizione:"))

if (totalShoppingCart > 50) {
  console.log("Complimenti! La spedizione è gratis")
} else {
  console.log("Il totale da pagare è " + (totalShoppingCart+10) + "€ con le spese di spedizione")
}

*/

/* ESERCIZIO EXTRA 3
  Oggi è il Black Friday e viene applicato il 20% su ogni prodotto.
  Modifica la risposta precedente includendo questa nuova promozione nell'algoritmo, determinando, usando l'algoritmo del codice precedente, se le spedizioni siano gratuite oppure no e e calcolando il totale.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

/*  ESERCIZIO EXTRA 4
  Usa un operatore ternaio per assegnare ad una variabile chiamata "gender" i valori "male" o "female".
  La scelta deve essere basata sul valore di un'altra variabile booleana chiamata isMale.
  Es. se isMale e' vero, il valore di gender deve essere "male"
*/

/* SCRIVI QUI LA TUA RISPOSTA */

/* ESERCIZIO EXTRA 5
  Scrivi un algoritmo che iteri i numeri da 1 a 100, stampandoli in console. Se un valore tuttavia è multiplo di 3 (operatore modulo!), stampa al suo posto la parola "Fizz" e se il numero è multiplo di 5, stampa "Buzz". Se le condizioni si verificano entrambe, stampa "FizzBuzz".
*/

/* SCRIVI QUI LA TUA RISPOSTA */