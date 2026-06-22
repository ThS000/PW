const alunos = [
  { nome: 'Ana', nota: 8 },
  { nome: 'Bruno', nota: 5 },
  { nome: 'Carla', nota: 9 },
  { nome: 'Diego', nota: 6 }
];

alunos.forEach((aluno) => {
    if (aluno.nota >= 7){
        console.log("Aluno: " + aluno.nome +  " aprovado");
    }else {
        console.log("Aluno: " + aluno.nome + " reprovado");
    }
});