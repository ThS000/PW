const compras = ["Arroz", "Feijão", "Macarrão"];

console.log(compras);

compras.push("Leite");

compras[1] = "Lentilha";

compras.splice(2, 1);

console.log(compras.length);

console.log(compras[0]);

console.log(compras[compras.length - 1]);

for (let i = 0; i < compras.length; i++) {
    console.log("Item " + (i + 1) + ": " + compras[i]);
}

