const pessoa = {    
    nome: 'William',
    sobrenome: 'Scapini', 
    idade: 18,
    endereco: {
        rua: "Av. tenente",
        numero: 200,
        cidade: 'Lorena',
        estado: 'SP',
        bairro: 'Novo Horizonte'
    }
};
console.log(pessoa.endereco.bairro);
//     pega o valor de nome e joga em uma variavel chamada nome
//          se não existir o valor sera "não existe"
//                                     pega o valor da chave idade e joga em uma variavel com nome id     
const {nome ,sobrenome = 'Não existe', idade: id} = pessoa;
console.log(nome,sobrenome,id); 
//                                              pega o restante
const {endereco: {rua,numero: n = "não existe"}, ...resto} = pessoa;
console.log(rua,n,resto);