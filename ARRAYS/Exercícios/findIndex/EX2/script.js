const alunos = [
  { nome: 'Ana', nota: 8 },
  { nome: 'Bruno', nota: 5 },
  { nome: 'Carla', nota: 9 }
];

const indice = alunos.findIndex((aluno) => {
    return  aluno.nome === "Bruno";
})

console.log(indice);