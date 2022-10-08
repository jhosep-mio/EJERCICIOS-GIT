const notasDeTPs = [4, 7, 8, 5, 10];
let notaFinal = 0;

// codea debajo de este comentario la solucion al ejercicio
let sum=0;
let contador=0;
notasDeTPs.forEach(ejercicio5);

function ejercicio5(item,posicion){
    sum=sum+item;
    contador++;
}
notaFinal=sum/contador;
console.log(notaFinal);
// deberia mostrar 6.8