// a
var array = [1, 2, 3, 4];
function arrayDeNumeros(array) {
    var sum = 0;
    var multiply = 1;
    for (var i = 0; i < array.length; i++) {
        sum + array[i];
    }
    for (var i = 0; i < array.length; i++) {
        multiply * array[i];
    }
    return {
        sum: sum,
        multiply: multiply
    };
}
// b - Utilizando o reduce
var maior = array.map(Number).reduce(function (a, b) {
    return Math.max(a, b);
});
console.log(maior);
var menor = array.map(Number).reduce(function (a, b) {
    return Math.min(a, b);
});
console.log(menor);
