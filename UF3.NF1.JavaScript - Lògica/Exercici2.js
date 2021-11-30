var x = 25;
var y = 30;

if (x > 10 && x < 50) {
    console.log('El numero ' + x + ' esta entre el 10 i el 50')
    if (y > 10 && x < 50) {
        console.log('El numero ' + y + ' esta entre el 10 i el 50')
    }
    else 
        console.log('El numero' + y + 'no esta entre el 10 i el 50')
}
else if (y > 10 && x < 50) {
    console.log('El numero ' + y + ' esta entre el 10 i el 50')
    if (x > 10 && x < 50) {
        console.log('El numero ' + x + ' esta entre el 10 i el 50')
    }
    else 
        console.log('El numero ' + x + ' no esta entre el 10 i el 50')
}
