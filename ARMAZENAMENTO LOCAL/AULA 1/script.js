// localStorage.setItem('nome', 'João Silva'); - No localStorage só se usa String
// localStorage.setItem('idade', 25);

// const nome = localStorage.getItem('nome');
// const idade = localStorage.getItem('idade');

// console.log(nome);
//console.log(idade);

//localStorage.removeItem('Fruta');


// localStorage.removeItem('idade'); - Remove o item selecionado
// localStorage.clear() - Remove tudo 



//localStorage.setItem('pessoa', pessoa);
//JSON - 'Javascript Object Notation'
//`{ "nome": "João Silva" }`

//const pessoaJson = JSON.stringify(pessoa); - Salva em string
//localStorage.setItem('pessoa', pessoaJson); - Salva no local storage

//const pessoa = {
//  nome: 'Thiago Saraiva',
//   idade: 25,
//   email: 'thiagosaraiva.dev.br@gmail.com',
//    estadoCivil: 'solteiro',
//};
//const pessoaJson = JSON.stringify(pessoa); - Converte em objeto
//localStorage.setItem('pessoa', pessoaJson); - Converte em objeto



//console.log(pessoa);
//console.log(pessoaJson);

//const pessoaJson = localStorage.getItem('pessoa'); - Recupera o objeto para String
//const pessoa = JSON.parse(pessoaJson);
//console.log(pessoa);


//let pessoas = []

//    const pessoasJson = localStorage.getItem('pessoas');


//    if (pessoasJson){
//        pessoas = JSON.parse(pessoaJson);
//    }
//console.log(pessoas);

const LOCAL_STORAGE_KEY = 'pessoas_ls';

function saveToLocalStorage(data) {
    const json= JSON.stringify(data);
    localStorage.setItem(LOCAL_STORAGE_KEY, json);
}


function loadFromLocalStorage() {
    const json = localStorage.getItem(LOCAL_STORAGE_KEY);
    if (json === null) {
        return [];
    } 
    return JSON.parse(json);
}

const pessoas = loadFromLocalStorage();
// Faz o que o programa tem que fazer

pessoas.push(pessoa);
saveToLocalStorage(pessoas);