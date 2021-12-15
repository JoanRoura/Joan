//Event "onblur"
function hol() {
    var variable = document.getElementById("etiqueta");
    variable.value =variable.value.toUpperCase();
}

//Event "onresize"
var acumulador = 0;
function deu() {
    var resultat = acumulador += 1;
    document.getElementById("etiqueta2").innerHTML = resultat;
}

