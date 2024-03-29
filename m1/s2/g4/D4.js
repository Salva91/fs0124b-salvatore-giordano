/* ESERCIZIO 1
 Scrivi una funzione di nome "area", che riceve due parametri (l1, l2) e calcola l'area del rettangolo associato.
*/

function area (l1,l2){
    return l1 * l2;

}
console.log(area(10,2));

/* ESERCIZIO 2
 Scrivi una funzione di nome "crazySum", che riceve due numeri interi come parametri.
 La funzione deve ritornare la somma dei due parametri, ma se il valore dei due parametri è il medesimo deve invece tornare
 la loro somma moltiplicata per tre.
*/

function crazySum (a,b){
   let somma = a + b;
    if (a === b){
        return somma * 3
    }
    return somma;
}
console.log(crazySum(2,3));

/* ESERCIZIO 3
 Scrivi una funzione di nome "crazyDiff" che calcola la differenza assoluta tra un numero fornito come parametro e 19.
 Deve inoltre tornare la differenza assoluta moltiplicata per tre qualora il numero fornito sia maggiore di 19.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

/* ESERCIZIO 4
 Scrivi una funzione di nome "boundary" che accetta un numero intero n come parametro, e ritorna true se n è compreso tra 20 e 100 (incluso) oppure
 se n è uguale a 400.
*/

function boundary (n){
    if ((n >= 20 && n <=100) || n === 400){
            return true;
    }else{
        return false;
    }
}
console.log(boundary(100));

/* ESERCIZIO 5
 Scrivi una funzione di nome "epify" che accetta una stringa come parametro.
 La funzione deve aggiungere la parola "EPICODE" all'inizio della stringa fornita, ma se la stringa fornita comincia già con "EPICODE" allora deve
 ritornare la stringa originale senza alterarla.
*/

function epify (stringa = 'EPICODE'){
    
    if (stringa === 'EPICODE'){

        return "EPICODE"
    }else{
        return stringa;
    }
}
console.log(epify("EPICODE"));


// esercizio 5 con metodo

function epify (stringa = "EPICODE"){

    if (stringa.startsWith("EPICODE")){
        return stringa;
    }else{
        return stringa;
    }
}
console.log(epify("EPICODE"));


/* ESERCIZIO 6
 Scrivi una funzione di nome "check3and7" che accetta un numero positivo come parametro. La funzione deve controllare che il parametro sia un multiplo
 di 3 o di 7. (Suggerimento: usa l'operatore modulo)
*/

function check3and7 (n){
    if (n % 3 == 0 || n % 7 == 0){
        return console.log("il numero inserito è un multiplo di 3 o di 7");
    }else{
        return console.log("il numero inserito non è un mutiplo di tre o di sette");
    }
}
console.log(check3and7(9));

/* ESERCIZIO 7
 Scrivi una funzione di nome "reverseString", il cui scopo è invertire una stringa fornita come parametro (es. "EPICODE" --> "EDOCIPE")
*/

function reverseString (stringa){
       let vettore = stringa.split("");
       vettore.reverse();
       vettoreAlContrario = vettore.join("");
       return vettoreAlContrario
}
console.log(reverseString("mario"));



/* ESERCIZIO 8
 Scrivi una funzione di nome "upperFirst", che riceve come parametro una stringa formata da diverse parole.
 La funzione deve rendere maiuscola la prima lettera di ogni parola contenuta nella stringa.
*/

function upperFirst(stringa) {
    let parole = stringa.split(" ");
    for (let i = 0; i < parole.length; i++) {
        if (parole[i].length > 0) {
            parole[i] = parole[i][0].toUpperCase() + parole[i].substring(1);
        }
    }
    return parole.join(" ");
}
console.log(upperFirst("bella giornata"));

// potevo evitare di scrivere la condizione nel caso se l'array fosse vuoto 


/* ESERCIZIO 9
 Scrivi una funzione di nome "cutString", che riceve come parametro una stringa. La funzione deve creare una nuova stringa senza il primo e l'ultimo carattere
 della stringa originale.
*/

function cutString(stringa) {
    let parolaNuova = "";
    for (let i = 0; i <stringa.length; i++){
        if (i===0 ||i===stringa.length-1){

        }else{
            parolaNuova+= stringa[i];
        }
    }
    return parolaNuova;
}
console.log(cutString("abete"));
    

/* ESERCIZIO 10
 Scrivi una funzione di nome "giveMeRandom", che accetta come parametro un numero n e ritorna un'array contenente n numeri casuali inclusi tra 0 e 10.
*/

function giveMeRandom (n) {
    let array = []
    for (let i = 0; i < n; i++) {
        array.push(Math.floor(Math.random() * 11));
      }
      return array;
}
console.log(giveMeRandom(10));
