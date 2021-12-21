const array = [1, 2, 2, 3, 4, 4, 5, 6, 6, 7, 8, 8, 9];

const hol = (num) => {
    return [... new Set(num)];
}
 
console.log(hol(array)); 