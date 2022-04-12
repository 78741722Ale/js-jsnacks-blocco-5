
/* 
Crea un array di 10 oggetti che rappresentano una zucchina, 
indicando per ognuna varietà, peso e lunghezza.
Calcola quanto pesano tutte le zucchine.
*/

const arrayZucchine = [
    // Primo Oggetto
    {
        varieta : "Faenza",
        peso: 20,
        lunghezza : 12
    },
    // Secondo Oggetto
    {
        varieta: "Faenza",
        peso: 20,
        lunghezza: 18
    },
    // Terzo Oggetto
    {
        varieta: "Faenza",
        peso: 30,
        lunghezza: 19
    },
    // Quarto Oggetto
    {
        varieta: "Faenza",
        peso: 35,
        lunghezza: 11
    },
    // Quinto Oggetto
    {
        varieta: "Faenza",
        peso: 23,
        lunghezza: 25
    },
    // Sesto Oggetto
    {
        varieta: "Faenza",
        peso: 11,
        lunghezza: 33
    },
    // Settimo Oggetto
    {
        varieta: "Faenza",
        peso: 50,
        lunghezza: 35
    },
    // Ottavo Oggetto
    {
        varieta: "Faenza",
        peso: 48,
        lunghezza: 30
    },
    // Nono Oggetto
    {
        varieta: "Faenza",
        peso: 33,
        lunghezza: 18
    },
    // Decimo Oggetto
    {
        varieta: "Faenza",
        peso: 30,
        lunghezza: 17
    }
]
console.log(arrayZucchine);


let somma = 0
// Calcola quanto pesano tutte le zucchine.
arrayZucchine.forEach((zucchina) => {
    console.log(zucchina.peso);
    somma = somma + zucchina.peso
})

console.log(somma);