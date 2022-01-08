var array = [" Vaaa "," Hola "," bonaa "," tardaa "," Vaagi "," Be "];
var array1 = [];
var contador = 0;
var contador1 = 0;

for (let i = 0; i < array.length; i++) {
    for (let j = 0; j <array.length; j++) {
        if (array[i][j] == 'a') {
            contador++;
            if (contador == 2) {
                array1[contador1] = array[i];
                contador1++;                
            }
        }
    }
    contador = 0;
}
document.write("Array normal: <br/>" + array + "<br/>")
document.write("Array amb paraules amb mes de una lletra a: <br/>" + array1)