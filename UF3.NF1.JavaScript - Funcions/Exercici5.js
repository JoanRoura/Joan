function contador(hola) { 
    const count = hola.match(/[aeiou]/gi).length;
    return count;
}

const paraula = ('Hola ');
const resultat = contador(paraula);
console.log(resultat);


