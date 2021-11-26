var fecha = new Date();
function bondia(signo = '/') {
    console.log((fecha.getDate() + signo + (fecha.getMonth() +1) + signo + fecha.getFullYear()))
}

function ex7(a,b,c) {
    bondia();
    return suma(a,b,c)

}

function suma(a,b,c) {
    return a+b+c;
}

console.log(ex7(3,4,7));
