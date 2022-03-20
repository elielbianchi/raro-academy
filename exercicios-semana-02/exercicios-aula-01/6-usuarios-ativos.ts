/*
* 6) Dada a lista de usuarios do nosso sistema, manipule o array, 
* para gerar em duas estruturas separadas a coleção de usuários 
* que estão ativos e a coleção de usuários que estão inativos.
*/

const usuarios = [
    { nome: 'Diego', idade: 23, ativo: true },
    { nome: 'Gabriel', idade: 15, ativo: false },
    { nome: 'Lucas', idade: 30, ativo: false },
];

const usuariosAtivos: Array<unknown> = usuarios.filter(pessoa => pessoa.ativo);
const usuariosInativos: Array<unknown> = usuarios.filter(pessoa => !pessoa.ativo);

console.log('Usuários Ativos:')
console.log(usuariosAtivos);
console.log('\nUsuários Inativos:')
console.log(usuariosInativos);