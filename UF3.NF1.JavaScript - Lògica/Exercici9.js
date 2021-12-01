var contador1 = 0;
var contador2 = 0;
var contador3 = 0;
var resultat3 = 0;
var resultat5 = 0;

do {
    if ((contador1 % 3 == 0) && (contador2 % 5 == 0 )){
        resultat3 = contador1 + resultat3;
        resultat5 = contador2 + resultat5;
    }
    else {
        if (contador1 % 3 == 0) {
            resultat3 = contador1 + resultat3;
            console.log(contador1);
        }
        else if (contador2 % 5 == 0 ) {
            resultat5 = contador2 + resultat5;
            console.log(contador2);
        }
    }
    contador1++;
    contador2++;
} while (contador1 <= 1000);

console.log(resultat3);
console.log(resultat5);