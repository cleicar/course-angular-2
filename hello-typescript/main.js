var minhaVar = "minha variavel";
function minhaFun(x, y) {
    return x + y;
}
// ECS 6 ou ECS 2015
var num = 2;
var PI = 3.14;
var numeros = [1, 2, 3];
numeros.map(function (valor) {
    return valor * 2;
});
// ARROW FUNCTION
numeros.map(function (valor) { return valor * 2; });
var Matematica = (function () {
    function Matematica() {
    }
    Matematica.prototype.soma = function (x, y) {
        return x + y;
    };
    return Matematica;
}());
