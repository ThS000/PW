const alunos = [
  { nome: 'Ana', nota: 8 },
  { nome: 'Bruno', nota: 5 },
  { nome: 'Carla', nota: 9 }
];

// 1. ache o índice de Bruno com findIndex
// 2. remova ele com splice(indice, 1)
// console.log(alunos) → deve mostrar Ana e Carla

const indice = alunos.findIndex((aluno) => {
    return aluno.nome === "Bruno";
});

alunos.splice(1,1);

console.log(alunos)