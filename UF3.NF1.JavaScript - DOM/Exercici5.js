//document.getElementsByClassName("llista").style.fontsize(20);
var etiqueta = document.getElementsByClassName('llista')

function toUpper() {
        .toLowerCase()
        .split(' ')
        .map(function(etiqueta) {
            return etiqueta[0].fontsize(10) + etiqueta.substr(1);
        })
        .join(' ');
}

document.write(toUpper(etiqueta));




/*function resultat(paraula) {
    return paraula[0].fontsize(10) + paraula.substr(1);
}

document.write(resultat(etiqueta));*/

/*var etiqueta = document.getElementsByClassName(String, 'llista');

function capitalizarPalabras( etiqueta ) {
  
    return etiqueta.toLowerCase()
              .trim()
              .split(' ')
              .map( v => v[0].toUpperCase() + v.substr(1) )
              .join(' ');  
}

console.log(capitalizarPalabras());

function resultat(etiqueta) {
    var etiqueta = document.getElementsByClassName("llista");
    etiqueta.replace(/\b\w/g, l => l.toUpperCase());
}

resultat();*/

//let etiqueta = document.getElementsByClassName(String ,llista);

//etiqueta.innerHTML = llista.innerHTML.replace(/\b\w/g, l => l.toUpperCase());

//etiqueta.replace(/\b\w/g, l => l.toUpperCase());

//etiqueta = llista.charAt(0).toUpperCase() + llista.slice(1);

//gran.innerit.HTML = document.innnerHTML.fontsize(30) + document.innerHTML.slize(1);