let array = Array.from({length: 5}, () => Math.floor(Math.random() * 10));
let array2 = [33, ...array, 36];
document.write("Numeros aletoris: " + "<br/>")
document.write(array2);
document.write("<br/>" +"Primer numero del array: " + "<br/>")
document.write(array2[0]);
document.write("<br/>" +"Ultim numero del array: " + "<br/>")
document.write(array2[4]);