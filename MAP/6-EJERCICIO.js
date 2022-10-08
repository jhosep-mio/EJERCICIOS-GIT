const playlist = ['Everlong', 'The Pretender', 'Learn to Fly'];

/// completá acá el código

const titulo= playlist.map((value,index)=> `${index} - ${value}`);


console.log(titulo);
// RESULTADO ESPERADO
// [ '0 - Everlong', '1 - The Pretender', '2 - Learn to Fly' ]  