// Scrivi una funzione che accetti una stringa come argomento e la ritorni girata (es. Ciao -> oaiC)

/**
 * 
 * @param {string} word Parola da mandare in reverse
 * @returns {string} ritorna il valore inverso
 */

function WordFunction(word) {
    // variabile secondUserWord_Reverse_Unite ma vuota
    let secondUserWord_Reverse_Unite = "";
    // Variabile I iniziale
    let i = word.length - 1;
    // Ciclo While
    while (i >= 0) {
        secondUserWord_Reverse_Unite = secondUserWord_Reverse_Unite + word[i];
        i--;
    }
    // ritorna il valore della parola unita
    return secondUserWord_Reverse_Unite;
}

const wordReverse = WordFunction("Ciao")
console.log(wordReverse);