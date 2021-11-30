function ex8(lines) {
    for (let i = 0; i < lines; i++) {
        let planta = '';
        for (let j = 0; j < i + 1; j++) {
            planta = planta + '* ';
        }
        console.log(planta)
    }
}
  
ex8(5);
