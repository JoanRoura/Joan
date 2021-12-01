
function ex10(linies) {
    bucle:
    for (var i = 0; i <= linies; ++i) {
        let planta = '';
        for (var k = i; k <= linies; ++k) { 
        }
        for (var j = 0; j < i * 2 - 1; ++j) {
            planta = planta + '*';   
        }
        console.log(planta)
        continue bucle;
    }
}

ex10(5);
