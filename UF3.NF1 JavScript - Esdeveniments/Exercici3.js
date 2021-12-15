var acumulador = ' ';
document.onkeydown=function (e) {
    acumulador += e.key;
    document.getElementById('entrada').innerHTML = acumulador;
}

