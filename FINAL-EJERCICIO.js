const datos = [2, -4, 6, 0, 5, -1];

// codear acá la solución del ejercicio
let positivos = [];


datos.forEach((value, po) => { if(value>=0) positivos[po]=value});

let doble= positivos.map(value => value*2);

let total=doble.reduce((value,p) => value+p);

console.log(positivos);
console.log(doble);
console.log(total); 