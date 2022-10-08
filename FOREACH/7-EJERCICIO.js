const valores = [ 6, 0, 5, 2, 3, 8, 7, 4, 1, 9 ];
const dobles = [];

// codea aca tu solución al ejercicio
valores.forEach(ejercicio7);

function ejercicio7(entrada, posicion){
    dobles[posicion]=entrada*2;
}

console.log("valores: ", valores);
console.log("dobles: ", dobles);
// deberias tener como resultado
// valores:  [ 6, 0, 5, 2, 3, 8, 7, 4, 1, 9 ]
// dobles:  [ 12, 0, 10, 4, 6, 16, 14, 8, 2, 18 ]