const numeros = [5, 12, 8, 20, 3, 15];

let soma = 0;

for(let i = 0; i < numeros.length; i++){
    if (numeros[i] > 10 ){
        soma = soma + numeros[i]; 
    };
};

console.log(soma);