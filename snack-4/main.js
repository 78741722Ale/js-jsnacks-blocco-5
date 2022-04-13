// Scrivi una funzione che fonda due array(aventi lo stesso numero di elementi)
// prendendo alternativamente gli elementi da uno e dall’altro
// es. [a, b, c], [1, 2, 3] → [a, 1, b, 2, c, 3].

// fonda due array(aventi lo stesso numero di elementi)
const arrayLetterale = ["a", "b", "c"];
const arrayNumerico = [1, 2, 3];
console.log(arrayLetterale, arrayNumerico);

/**
 * Funzione per valori sequenziale tra due array differenti
 * @param {array} first_Array --> il primo array (arrayLetterale)
 * @param {array} second_Array --> il secondo array (arrayNumerico)
 * @returns {array} arrayMerged --> l'array inizialmente vuoto ma poi riempito
 */
function merged(first_Array, second_Array) {
    // Creo l'array vuoto in cui pusherò tutto
    const arrayMerged = []
    if (first_Array.length === second_Array.length) {
        //  Ciclo nel primo array
            first_Array.forEach((element, index) => {
            // Pusho element nell'array vuoto
            arrayMerged.push(element);
            // pusho l'index nell'array vuoto 
            arrayMerged.push(second_Array[index])
        });
    }
    // Valore di ritorno
    return arrayMerged
}
// Verifica alternativa
console.log(merged(arrayLetterale, arrayNumerico));
// Ciò che mi aspetto (a, 1 , b, 2, c, 3)