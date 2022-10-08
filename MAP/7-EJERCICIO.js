const costos = [ 12.5, 56, 98, 45.75 ];

const agregarIVA = function (costo) {
  return costo * 1.21;
}

const sumarGanancia = function (costo) {
  return costo * 1.5;
}

// codear acá la solución del ejercicio

const preciosFinales = costos.map( value => agregarIVA(sumarGanancia(value))
);



console.log(preciosFinales);
// deberia mostrar
// [ 22.6875, 101.64, 177.87, 83.03625 ]