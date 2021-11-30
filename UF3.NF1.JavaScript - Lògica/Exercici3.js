var x = 7;

switch (true) {
    case x <= 4.99:
        console.log('Suspès')
        break;
    case x >= 5 && x <= 5.99:
        console.log('Suficient')
        break;
    case x >= 6 && x <= 6.99:
        console.log('Bé')
        break;
    case x >= 7 && x <= 8.99:
        console.log('Notable')
        break;
    case x >= 9 && x <= 10:
        console.log('Excel·lent')
        break;
}