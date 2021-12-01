var numero = 21;
var contador = 0;
var acumulador = 0;
var acumulador2 = 0;


while (contador <= numero) {
    contador++;
    acumulador = contador + acumulador;
    if (acumulador == numero) {
        console.log('El numero de numeros sumats per obtenir ' + numero + ' es de ' + contador);
    }
}




