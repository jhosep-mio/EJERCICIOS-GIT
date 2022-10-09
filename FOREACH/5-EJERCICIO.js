const notasDeTPs = [4, 7, 8, 5, 10];
let notaFinal = 0;

// codea debajo de este comentario la solucion al ejercicio
let sum=0;
const resultado5=notasDeTPs.forEach(item => {
    notaFinal=(sum=sum+item)/notasDeTPs.length
});

console.log(notaFinal);
// deberia mostrar 6.8