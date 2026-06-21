const materiais = ["Caderno", "Caneta", "Lápis"];

console.log(materiais);

materiais.push("Borracha");

console.log(materiais.length);

console.log(materiais[0]);

console.log(materiais[materiais.length - 1]);

materiais.pop();

console.log(materiais);

for (let i = 0; i < materiais.length; i++) {
    console.log(materiais[i]);
}
