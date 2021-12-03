function combinarnumeros () {
    var numero = 123456;
    var array = Array.from([1,2,3,4,5,6]);
    console.log(array)
    var count = 0;
    for (var i = 0; i < array.length - count; i++) {
        if (i % 2 !== 0) {
            var temp = array[i];
            array[i] = array[i - 1];
            array[i-1] = temp;
        }
    }
    console.log(array)
}
combinarnumeros();