const numeros = [4, 11, 7, 18, 3, 25, 10, 14];

let contador = 0;

for(let i = 0; i < numeros.length; i++){
    if(numeros[i] >= 10){
        contador = contador + 1
    };
};
console.log(contador);

