const alunos = [
  { nome: 'Ana', nota: 8 },
  { nome: 'Bruno', nota: 5 },
  { nome: 'Carla', nota: 9 },
  { nome: 'Diego', nota: 6 }
];


const aprovados = alunos.map((aluno) => {
    return {
        nome: aluno.nome,
        nota: aluno.nota,
        aprovado: aluno.nota >= 7
    };
});

console.log(aprovados);
