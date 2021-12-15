window.onload = function () {
    var contador = 0;
    document.getElementById("click").onclick = function () {
        contador++;
        document.getElementById("ensenyar").innerHTML = contador
    }
    document.getElementById("borrar").onclick = function () {
        contador = 0;
        document.getElementById("ensenyar").innerHTML = contador
    }
}
