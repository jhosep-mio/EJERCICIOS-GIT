const productos = [ 'celular', 'notebook', 'monitor' ];
const costos = [ 12.5, 56, 98 ];

const agregarIVA = function (costo) {
  return costo * 1.21;
}

const sumarGanancia = function (costo) {
  return costo * 1.5;
}

// codear acá la solución del ejercicio

const preciosFinales = costos.map( (value, p) => `${productos[p]} ${agregarIVA(sumarGanancia(value))}`
);

console.log(preciosFinales);
// deberia mostrar
// [ "celular 22.6875", "notebook 101.64", "monitor 177.87" ]