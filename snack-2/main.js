/* 
Crea 10 oggetti che rappresentano una zucchina.
Dividi in due array separati le zucchine che misurano meno o più di 15cm.
Infine stampa separatamente quanto pesano i due gruppi di zucchine.
*/

const arrayZucchine = [
    // Primo Oggetto
    {
        varieta: "Faenza",
        peso: 20,
        lunghezza: 12
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

const zucchineCorte = arrayZucchine.filter((zucchina) => zucchina.lunghezza < 15)
console.log(zucchineCorte);
const zucchineLunghe = arrayZucchine.filter((zucchina) => zucchina.lunghezza > 15)
console.log(zucchineLunghe);

// Infine stampa separatamente quanto pesano i due gruppi di zucchine.
let somma = 0;

// peso delle corte
zucchineCorte.forEach((zucchina) => {
    somma = somma + zucchina.peso
    return somma
})
console.log(`il peso delle zucchine corte è: ${somma}`);

// Peso delle lunghe
zucchineLunghe.forEach((zucchina) => {
    somma = somma + zucchina.peso
    return somma
})
console.log(`il peso delle zucchine lunghe è: ${somma}`);
