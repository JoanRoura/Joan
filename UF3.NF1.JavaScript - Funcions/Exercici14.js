function posicio(frase, paraula) {
    var frase = 'Hola bona tarda'
    var paraula = 'bona'
    return (frase.length - frase.search(paraula))
}

console.log(posicio());

function dividir(frase,paraula) {
    return paraula.substr(frase,paraula.length)
}
console.log(dividir(posicio('Hola bona tarda','bona'),'Hola bona tarda'));

