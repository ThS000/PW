const musicas = ['rock', 'pop', 'jazz'];
const existe = musicas.includes('pop'); // true
const indice = musicas.indexOf('pop'); // 1
musicas.splice(indice, 1); // ['rock', 'jazz']