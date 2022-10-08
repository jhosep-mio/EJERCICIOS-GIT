const notasDeTPs = [4, 7, 8, 5, 10];

// codea debajo de este comentario la solucion al ejercicio

let promedio= notasDeTPs.reduce((a,b) =>(a+b));
// deberia mostrar 6.8
promedio/=notasDeTPs.length;
console.log(promedio);