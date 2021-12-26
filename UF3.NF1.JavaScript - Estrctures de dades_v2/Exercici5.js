var array = { 'a': 1, 'b': 2, 'c': 3 };

Object.keys(array).map(function(clau) {
   array[clau] = Math.pow(array[clau],3);
});

console.log(array);
