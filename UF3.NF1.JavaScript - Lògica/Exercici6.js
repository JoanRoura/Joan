var a = 999;
var b = 333;
var c = 666;

if (a > b && a > c) {
    if (b > c) {
        console.log('Els numeros de mes gran a mes petit son: ' + a, b, c)
    }
    else 
        console.log('Els numeros de mes gran a mes petit son: ' + a, c, b)    
}
else if (b > a && b > c) {
    if (c > a) {
        console.log('Els numero de mes gran a mes petit son: ' + b,  c, a)
    }
    else 
        console.log('Els numero de mes gran a mes petit son: ' + b, a, c)
}
else if (c > a && c > b) {
    if (a > b) {
        console.log('Els numeros de mes gran a mes petit son: ' + c, a, b)
    }
    else 
        console.log('Els numeros de mes gran a mes petit son: ' + c, b, a)
}
    