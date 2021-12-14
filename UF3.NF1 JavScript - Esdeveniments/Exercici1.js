let a = document.getElementById("Verd");
let verd = document.getElementById("Verd").style.background = "green";

a.addEventListener('mouseup', blau);
a.addEventListener('mousedown', taronja);

function taronja() {
    document.getElementById("Verd").style.background = "blue";
}

function blau() {
    document.getElementById("Verd").style.background = "orange";
}