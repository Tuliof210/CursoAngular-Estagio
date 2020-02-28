var x = 10;
console.log(x);
var num = 2;
var PI = 3.14;
var numeros = [1, 3, 4, 7];
numeros.map(function (valor) {
    return valor * 3;
});
numeros.map(function (v) { return v * 4; });
var Matematica = /** @class */ (function () {
    function Matematica() {
    }
    Matematica.prototype.soma = function (x, y) {
        return x + y;
    };
    return Matematica;
}());
var text = 'lul';
