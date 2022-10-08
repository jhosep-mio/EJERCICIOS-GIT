const personas = [
    {nombre: "Grace", 
    edad: 6
    }, 
    {nombre: "Ada", 
    edad: 19
    },
    {nombre: "Hedy", 
    edad: 34
    }
  ];

let suma= personas.reduce((acomulador,actual) => acomulador + actual.edad,0);

console.log(suma);
// codea debajo de este comentario la solucion al ejercicio

// deberia mostrar 59