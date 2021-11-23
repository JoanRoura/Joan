var fecha = new Date();
function bondia(signo = '/') {
    console.log((fecha.getDate() + signo + (fecha.getMonth() +1) + signo + fecha.getFullYear()))
}

bondia();