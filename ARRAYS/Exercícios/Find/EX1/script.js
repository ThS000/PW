const alunos = [
    {
        id: 1,
        nome: "Ana",
        nota: 8
    },
    {
        id: 2,
        nome: "Bruno",
        nota: 6
    },
    {
        id: 3,
        nome: "Carla",
        nota: 9
    }
];

const aluno = alunos.find((aluno) => {
    return aluno.id === 2;
});

console.log(aluno.nome);

console.log(aluno.nota);