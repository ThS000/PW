const frutas = ["Maçã", "Banana", "Uva"];

for (let i = 0; i < frutas.length; i++) {
    console.log(frutas[i]);
}

frutas.push("Laranja");

for (let i = 0; i < frutas.length; i++) {
    console.log(frutas[i]);
}

console.log("Total de frutas: " + frutas.length);

console.log(frutas[0]);

console.log(frutas[frutas.length - 1]);

frutas.pop();