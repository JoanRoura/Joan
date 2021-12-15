let acumulador = '';
document.onkeydown=function (e) {
    acumulador += e.key;
    if (acumulador == "rhino") {
        window.open(URL="https://www.youtube.com/watch?v=RCA3EfKUJMw");
    }
}

