var string  = "P4L4BR4S";
var numero = string.replace(/[^0-9]/ig, "");

var resultat = 0;

for (var i = 0; i < numero.length; i++){
    resultat = Number(numero.charAt(i)) + resultat;
}
console.log(resultat);