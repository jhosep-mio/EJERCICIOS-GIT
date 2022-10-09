const masNumeros = [ 43, 11, 18, 46, 44, 37, 42, 29, 9, 3, 37, 0, 40, 10, 38, 34, 25, 40, 4, 32 ];
const numerosPares = [];
const numerosImpares = [];

// SOLUCION

const resultado6= masNumeros.forEach((item, posicion) => {
    if(item%2==0){
        numerosPares[posicion]=item;
    }else {
        numerosImpares[posicion]=item;
    }
});

console.log("pares: ", numerosPares);
console.log("impares: ", numerosImpares);
// deberias tener como resultado
// pares: [18, 46, 44, 42, 0, 40, 10, 38, 34, 40, 4, 32]
// impares: [43, 11, 37, 29, 9, 3, 37, 25]