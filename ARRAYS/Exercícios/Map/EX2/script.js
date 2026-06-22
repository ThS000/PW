const alunos = [
  { nome: 'Ana', nota: 8 },
  { nome: 'Bruno', nota: 6 },
  { nome: 'Carla', nota: 9 }
];

const soNomes = alunos.map((aluno) => {
    return aluno.nome
});

console.log(soNomes);